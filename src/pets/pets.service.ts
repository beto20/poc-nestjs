import { Injectable } from '@nestjs/common';
import { prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetsService {

  constructor(private readonly prismaService: PrismaService) {
    
  }


  create(createPetDto: CreatePetDto) {
    return this.prismaService.pet.create({
      data: createPetDto
    });
  }

  findAll() {
    return this.prismaService.pet.findMany();
  }

  findOne(id: string) {
    return this.prismaService.pet.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: string, updatePetDto: UpdatePetDto) {
    return this.prismaService.pet.update({
      where: {
        id: id
      },
      data: updatePetDto
    });
  }

  remove(id: string) {
    return this.prismaService.pet.delete({
      where: {
        id: id
      }
    })
  }
}
