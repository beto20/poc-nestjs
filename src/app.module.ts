import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { PetsModule } from './pets/pets.module';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [PrismaModule, ProductsModule, AuthModule, PetsModule, CountriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
