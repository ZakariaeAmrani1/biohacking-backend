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

  @IsOptional()
  @IsString()
  methode_paiement?: string;

  @IsOptional()
  @IsDateString(
    {},
    { message: 'La date de paiement doit être au format ISO.\n' },
  )
  date_paiement?: string;

  @IsOptional()
  @IsString()
  cheque_numero?: string;

  @IsOptional()
  @IsString()
  cheque_banque?: string;

  @IsOptional()
  @IsDateString({}, { message: 'La date de tirage doit être au format ISO.\n' })
  cheque_date_tirage?: string;

  @IsNotEmpty({ message: 'Le créateur est obligatoire.\n' })
  @IsString()
  Cree_par: string;
}
