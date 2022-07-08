import { ApiProperty } from "@nestjs/swagger"
import { Country } from "@prisma/client"
import { PetEntity } from "src/pets/entities/pet.entity"

export class CountryEntity implements Country {

    @ApiProperty()
    id: string
    @ApiProperty()
    name: string
    @ApiProperty()
    continent: string
    @ApiProperty()
    pet: PetEntity[]

    constructor(partial: Partial<CountryEntity>) {
        Object.assign(this, partial);
    }

}
