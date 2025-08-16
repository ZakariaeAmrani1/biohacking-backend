import { IsJSON, IsNotEmpty, IsString } from 'class-validator';

export class CreateDocumentTemplateDto {
  @IsNotEmpty({ message: 'Le nom du modèle est obligatoire.\n' })
  @IsString()
  name: string;

  @IsNotEmpty()
  sections_json: any;

  @IsNotEmpty({ message: 'Le créateur est obligatoire.\n' })
  @IsString()
  Cree_par: string;
}
