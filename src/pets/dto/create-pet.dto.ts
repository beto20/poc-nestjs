import { ApiProperty } from "@nestjs/swagger";

export class CreatePetDto {

    @ApiProperty()
    name: string;
    @ApiProperty()
    breeds: string;
    @ApiProperty()
    countryId: string;

}
