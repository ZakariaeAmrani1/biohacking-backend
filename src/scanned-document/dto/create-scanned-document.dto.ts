import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateScannedDocumentDto {
  @IsNotEmpty({ message: 'Le CIN du client est obligatoire.' })
  @IsString({ message: 'Le CIN doit être une chaîne de caractères.' })
  CIN: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString({ message: 'Cree_par doit être une chaîne de caractères.' })
  Cree_par: string;
}
