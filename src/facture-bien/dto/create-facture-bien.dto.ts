import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { BienType } from 'generated/prisma';

export class CreateFactureBienDto {
  @IsNotEmpty({ message: 'La facture est obligatoire.\n' })
  @IsNumber()
  id_facture: number;

  @IsNotEmpty({ message: 'Le bien est obligatoire.\n' })
  @IsNumber()
  id_bien: number;

  @IsNotEmpty({ message: 'Le type du bien est obligatoire.\n' })
  @IsString()
  type_bien: string;

  @IsNotEmpty({ message: 'La quantité est obligatoire.\n' })
  @IsNumber()
  quantite: number;

  @IsNotEmpty({ message: 'Le créateur est obligatoire.\n' })
  @IsString()
  Cree_par: string;
}
