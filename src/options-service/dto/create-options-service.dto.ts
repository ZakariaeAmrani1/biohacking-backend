import { IsOptional, IsArray, IsString } from 'class-validator';

export class CreateOptionsServiceDto {
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  bankNames?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  appointmentTypes?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  soinTypes?: string[];
}
