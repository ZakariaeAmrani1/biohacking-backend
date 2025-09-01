import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDocumentDto {
  @IsNotEmpty({ message: 'Le type de document est obligatoire.\n' })
  @IsNumber()
  template_id: number;

  @IsNotEmpty({ message: 'Le créateur est obligatoire.\n' })
  @IsString()
  CIN: string;

  @IsNotEmpty()
  data_json: any;

  @IsNotEmpty({ message: 'Le créateur est obligatoire.\n' })
  @IsString()
  Cree_par: string;
}
