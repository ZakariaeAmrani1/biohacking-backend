import {
  IsString,
  IsEnum,
  IsNumber,
  IsInt,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { BienType, ServiceType } from 'generated/prisma';

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
  @IsNumber()
  prix: number;

  @IsOptional()
  @IsInt()
  stock: number;

  @IsString()
  Cree_par: string;
}
