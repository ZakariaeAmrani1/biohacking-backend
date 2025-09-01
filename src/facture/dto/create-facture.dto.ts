import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateFactureDto {
  @IsNotEmpty({ message: 'Le créateur est obligatoire.\n' })
  @IsString()
  CIN: string;

  @IsNotEmpty({ message: 'La date est obligatoire.\n' })
  @IsDateString(
    {},
    { message: 'La date de naissance doit être au format ISO.\n' },
  )
  date: string;

  @IsNotEmpty({ message: 'Le type de document est obligatoire.\n' })
  @IsNumber()
  prix_total: number;

  @IsNotEmpty({ message: 'Le statut est obligatoire.\n' })
  @IsString()
  statut: string;

  @IsOptional()
  @IsString()
  notes: string;

  @IsNotEmpty({ message: 'Le créateur est obligatoire.\n' })
  @IsString()
  Cree_par: string;
}
