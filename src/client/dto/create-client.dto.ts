import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsOptional,
  IsEmail,
  Matches,
} from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty({ message: 'Le CIN est obligatoire.\n' })
  @Matches(/^[A-Za-z]{1,2}\d{5,}$/, {
    message:
      'Le CIN doit commencer par une ou deux lettres suivies d’au moins 5 chiffres (minimum 7 caractères).\n',
  })
  @IsString()
  CIN: string;

  @IsNotEmpty({ message: 'Le nom est obligatoire.\n' })
  @IsString()
  nom: string;

  @IsNotEmpty({ message: 'Le prénom est obligatoire.\n' })
  @IsString()
  prenom: string;

  @IsOptional()
  @IsDateString(
    {},
    { message: 'La date de naissance doit être au format ISO.\n' },
  )
  date_naissance: string;

  @IsOptional()
  @IsString()
  adresse: string;

  @IsOptional()
  @IsString()
  numero_telephone: string;

  @IsOptional()
  @IsString()
  groupe_sanguin: string;

  @IsOptional()
  // @IsEmail({}, { message: 'L’email doit être valide.\n' })
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  commentaire?: string;

  @IsOptional()
  @IsString()
  allergies?: string;

  @IsOptional()
  @IsString()
  antecedents?: string;

  @IsNotEmpty({ message: 'Le créateur est obligatoire.\n' })
  @IsString()
  Cree_par: string;
}
