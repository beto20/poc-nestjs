import { ApiProperty } from "@nestjs/swagger"
import { PetEntity } from "src/pets/entities/pet.entity"

export class CreateCountryDto {

    @ApiProperty()
    name: string
    @ApiProperty()
    continent: string
    @ApiProperty()
    pet: PetEntity[]


}
