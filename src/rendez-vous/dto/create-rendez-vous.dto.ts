import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Role } from '../enum/role';

export class CreateRendezVousDto {
  @IsNotEmpty({ message: 'Le CIN du client est obligatoire.' })
  @IsString({ message: 'Le CIN doit être une chaîne de caractères.' })
  CIN: string;

  @IsNotEmpty({ message: 'Le sujet du rendez-vous est obligatoire.' })
  @IsString({ message: 'Le sujet doit être une chaîne de caractères.' })
  sujet: string;

  @IsNotEmpty({ message: 'La date du rendez-vous est obligatoire.' })
  @IsDateString(
    {},
    {
      message:
        'La date doit être au format ISO 8601 (ex: 2025-08-06T14:00:00Z).',
    },
  )
  date_rendez_vous: string;

  // created_at est généralement géré par la base, donc optionnel ici
  @IsOptional()
  @IsDateString({}, { message: 'created_at doit être une date ISO valide.' })
  created_at?: string;

  // Cree_par : mieux la remplir côté serveur depuis req.user (optionnel côté DTO)
  @IsOptional()
  @IsString({ message: 'Cree_par doit être une chaîne de caractères.' })
  Cree_par: string;

  @IsNotEmpty({ message: 'Le Statut est obligatoire.' })
  @IsEnum(Role, { message: 'status must be a valid enum value' })
  status: Role;
}
