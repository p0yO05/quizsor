import { IsNotEmpty, IsString, IsInt, MaxLength, IsDate } from 'class-validator';

export class CreateAutoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  placa: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  marca: string;

  @IsInt()
  @IsNotEmpty()
  modelo: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  color: string;

  @IsDate()
  @IsNotEmpty()
  fecha_ingreso: Date;
}