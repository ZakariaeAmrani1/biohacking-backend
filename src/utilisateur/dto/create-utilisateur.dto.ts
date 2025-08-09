import { IsNotEmpty, IsEnum, IsEmail, MinLength } from 'class-validator';
import { Role } from 'src/auth/enum/role';

export class CreateUtilisateurDto {
  @IsNotEmpty({ message: 'La CIN est obligatoire.' })
  CIN: string;

  @IsNotEmpty({ message: 'Le rôle est obligatoire.' })
  @IsEnum(Role, { message: 'role must be a valid enum value' })
  role: Role;

  @IsNotEmpty({ message: 'Le prénom est obligatoire.' })
  prenom: string;

  @IsNotEmpty({ message: 'Le nom est obligatoire.' })
  nom: string;

  @IsNotEmpty({ message: 'La date de naissance est obligatoire.' })
  date_naissance: Date;

  @IsNotEmpty({ message: 'Le numéro de téléphone est obligatoire.' })
  numero_telephone: string;

  @IsNotEmpty({ message: "L'adresse est obligatoire." })
  adresse: string;

  @IsEmail({}, { message: 'Adresse e-mail non valide' })
  email: string;

  @IsNotEmpty({ message: 'Un mot de passe est requis.' })
  @MinLength(6, {
    message: 'Le mot de passe doit comporter au moins 6 caractères.',
  })
  password: string;
}
