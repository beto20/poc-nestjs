import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaClientExceptionFilter } from './prisma-client-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // binds ValidationPipe para toda la aplicacion
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // hace la transformacion automatica de los payload
      transformOptions: {
        enableImplicitConversion: true, // transforma en base a los type de TS
      },
    }),
  );

  // transforma todos los response
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

  // PrismaClientExceptionFilter para toda la aplicacion, requiere de HttpAdapterHost porque extiende de BaseExceptionFilter
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  // Configuracion de swagger
  const config = new DocumentBuilder()
  .setTitle('NestJS Prisma Workshop')
  .setDescription('API description')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

}
bootstrap();
