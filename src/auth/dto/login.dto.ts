import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Un email est requis.' })
  @IsEmail({}, { message: 'Adresse e-mail non valide' })
  email: string;

  @IsNotEmpty({ message: 'Un mot de passe est requis.' })
  password: string;
}
