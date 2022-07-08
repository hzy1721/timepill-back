import { IsDate, IsString } from "class-validator";

export class CreatePillDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsDate()
  openTime: Date;

  @IsString()
  content: string;

  @IsString()
  hint: string;
}
