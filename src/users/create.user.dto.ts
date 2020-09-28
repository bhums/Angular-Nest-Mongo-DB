import { IsString, IsInt } from 'class-validator';

export class CreateUserDTO {
  //  @IsInt() id: Number;
    @IsString() firstName: string;
    @IsString() lastName: string;
    @IsString() emailId: string;
}