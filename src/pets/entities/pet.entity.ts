import { ApiProperty } from "@nestjs/swagger";
import { Pet } from "@prisma/client"

export class PetEntity implements Pet {

    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    breeds: string;
    @ApiProperty()
    countryId: string;

    constructor(partial: Partial<PetEntity>) {
        Object.assign(this, partial);
    }

}
