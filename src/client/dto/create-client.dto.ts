import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsOptional,
  IsEmail,
} from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty({ message: 'Le CIN est obligatoire.' })
  @IsString()
  CIN: string;

  @IsNotEmpty({ message: 'Le nom est obligatoire.' })
  @IsString()
  nom: string;

  @IsNotEmpty({ message: 'Le prénom est obligatoire.' })
  @IsString()
  prenom: string;

  @IsNotEmpty({ message: 'La date de naissance est obligatoire.' })
  @IsDateString(
    {},
    { message: 'La date de naissance doit être au format ISO.' },
  )
  date_naissance: string;

  @IsNotEmpty({ message: 'L’adresse est obligatoire.' })
  @IsString()
  adresse: string;

  @IsNotEmpty({ message: 'Le numéro de téléphone est obligatoire.' })
  @IsString()
  numero_telephone: string;

  @IsNotEmpty({ message: 'Le groupe sanguin est obligatoire.' })
  @IsString()
  groupe_sanguin: string;

  @IsNotEmpty({ message: 'L’email est obligatoire.' })
  @IsEmail({}, { message: 'L’email doit être valide.' })
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

  @IsNotEmpty({ message: 'Le créateur est obligatoire.' })
  @IsString()
  Cree_par: string;
}
