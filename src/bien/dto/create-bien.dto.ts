import {
  IsString,
  IsEnum,
  IsNumber,
  IsInt,
  IsNotEmpty,
  IsOptional,
  Min,
  Max,
} from 'class-validator';
import { BienType, ServiceType } from '@prisma/client';

export class CreateBienDto {
  @IsNotEmpty({ message: 'Le nom du bien est obligatoire.\n' })
  @IsString()
  Nom: string;

  @IsNotEmpty({ message: 'Le type du bien est obligatoire.\n' })
  @IsEnum(BienType)
  bien_type: BienType;

  @IsOptional()
  @IsString()
  Type: string;

  @IsNotEmpty({ message: 'Le prix du bien est obligatoire.\n' })
  @IsNumber({}, { message: 'Le prix doit être un nombre.\n' })
  @Min(0, { message: 'Le prix minimum est 0.\n' })
  @Max(100000, { message: 'Le prix maximum est 100000.\n' })
  prix: number;

  @IsOptional()
  @Min(0, { message: 'Le stock minimum est 0.\n' })
  @Max(100000, { message: 'Le stock maximum est 100000.\n' })
  @IsInt()
  stock: number;

  @IsOptional()
  @IsString()
  cabinet: string;

  @IsOptional()
  @IsString()
  therapeute: string;

  @IsString()
  Cree_par: string;
}
