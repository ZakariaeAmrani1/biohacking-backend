import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWorkflowDto {
  @IsString()
  @IsNotEmpty()
  client_CIN: string;

  @IsInt()
  @IsNotEmpty()
  rendez_vous_id: number;

  @IsInt()
  @IsOptional()
  facture_id?: number;

  @IsString()
  @IsNotEmpty()
  Cree_par: string;
}

export class UpdateWorkflowDto {
  @IsInt()
  @IsOptional()
  facture_id?: number;
}
