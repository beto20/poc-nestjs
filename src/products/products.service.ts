import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Injectable } from '@nestjs/common';
import { Prisma, prisma } from '@prisma/client';
import { ConnectionArgs } from 'src/page/connection-args.dto';
import { Page } from 'src/page/page.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(private prisma: PrismaService) {

  }


  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createProductDto
    })
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({ 
      where: { 
        id: id 
      } 
    });
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: {
        id: id
      },
      data: updateProductDto
    })
  }

  remove(id: string) {
    return this.prisma.product.delete({
      where: {
        id: id
      }
    })
  }

  findDrafts() {
    return this.prisma.product.findMany({ where: { published: false } });
  }

  async findPage(connectionArgs: ConnectionArgs) {
    
    const where: Prisma.ProductWhereInput = {
      published: true,
     };

     const productPage = await findManyCursorConnection(
      // args contiene take, skip y cursor
      (args) =>
        this.prisma.product.findMany({
          ...args, // aplica paginacion args 
          where: where,
        }),
      () =>
        this.prisma.product.count({
          where: where,
        }),
      connectionArgs, // retorna todos los productos
      {
        recordToEdge: (record) => ({
          node: new ProductEntity(record), // instancia que transforma los precios
        }),
      },
    );
    return new Page<ProductEntity>(productPage); // instancia como se devuelve este objeto
  }




}
