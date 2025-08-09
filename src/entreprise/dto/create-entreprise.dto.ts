import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEntrepriseDto {
  @IsString({ message: 'L’ICE doit être un nombre entier.' })
  @IsNotEmpty({ message: 'L’ICE est obligatoire.' })
  ICE: string;

  @IsString({ message: 'Le CNSS doit être un nombre entier.' })
  @IsNotEmpty({ message: 'Le CNSS est obligatoire.' })
  CNSS: string;

  @IsString({ message: 'Le RC doit être un nombre entier.' })
  @IsNotEmpty({ message: 'Le RC est obligatoire.' })
  RC: string;

  @IsString({ message: 'L’IF doit être un nombre entier.' })
  @IsNotEmpty({ message: 'L’IF est obligatoire.' })
  IF: string;

  @IsString({ message: 'Le RIB doit être un nombre entier.' })
  @IsNotEmpty({ message: 'Le RIB est obligatoire.' })
  RIB: string;

  @IsString({ message: 'La patente doit être un nombre entier.' })
  @IsNotEmpty({ message: 'La patente est obligatoire.' })
  patente: string;

  @IsString({ message: "L'adresse doit être une chaîne de caractères." })
  @IsNotEmpty({ message: "L'adresse est obligatoire." })
  adresse: string;
}
