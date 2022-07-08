import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PetEntity } from './entities/pet.entity';

@ApiTags('Pets')
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  @ApiResponse({ status: 201, type: PetEntity })
  create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Get()
  @ApiResponse({ status: 200, type: [PetEntity] })
  async findAll() {
    const petsResponse = await this.petsService.findAll();
    return petsResponse.map(response => new PetEntity(response));
  }

  @Get(':id')
  @ApiResponse({ status: 200, type: PetEntity })
  async findOne(@Param('id') id: string) {
    const petResponse = await this.petsService.findOne(id);
    return new PetEntity(petResponse); 
  }

  @Patch(':id')
  @ApiResponse({ status: 200, type: PetEntity })
  async update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    const petResponse = await this.petsService.update(id, updatePetDto);
    return new PetEntity(petResponse); 
  }

  @Delete(':id')
  @ApiResponse({ status: 200 })
  async remove(@Param('id') id: string) {
    const petResponse = await this.petsService.remove(id);
    return new PetEntity(petResponse); 
  }
}
