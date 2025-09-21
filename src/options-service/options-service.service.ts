import { Injectable } from '@nestjs/common';
import { CreateOptionsServiceDto } from './dto/create-options-service.dto';
import { UpdateOptionsServiceDto } from './dto/update-options-service.dto';
import path from 'path';
import * as fs from 'fs';

export interface OptionLists {
  bankNames: string[];
  appointmentTypes: string[];
  soinTypes: string[];
}

const defaultOptions: OptionLists = {
  bankNames: [
    'Attijariwafa bank',
    'BMCE Bank of Africa',
    'CIH Bank',
    'Banque Populaire',
    'Société Générale',
    'Crédit du Maroc',
    'BMCI',
    'Bank Al-Maghrib',
  ],
  appointmentTypes: [
    'Consultation Biohacking',
    'Thérapie IV',
    'Séance de Cryothérapie',
    'Analyse du Bilan Sanguin',
    'Consultation Bien-être',
    'Suivi Post-Traitement',
    'Thérapie par Ondes de Choc',
    'Consultation Nutritionnelle',
    'Examen Médical Complet',
    'Thérapie par la Lumière',
    'Consultation Hormonale',
    'Séance de Récupération',
  ],
  soinTypes: [
    'Consultation',
    'Diagnostic',
    'Préventif',
    'Thérapeutique',
    'Chirurgie',
    'Rééducation',
    'Urgence',
    'Suivi',
  ],
};

@Injectable()
export class OptionsServiceService {
  private readonly filePath = path.join(process.cwd(), 'data', 'options.json');
  private readFile(): OptionLists {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(data) as OptionLists;
    } catch {
      return defaultOptions;
    }
  }

  private writeFile(options: OptionLists): void {
    fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
    fs.writeFileSync(this.filePath, JSON.stringify(options, null, 2), 'utf-8');
  }

  findAll() {
    return this.readFile();
  }

  update(partial: Partial<OptionLists>): OptionLists {
    const current = this.readFile();
    const updated: OptionLists = {
      ...current,
      ...partial,
    };
    this.writeFile(updated);
    return updated;
  }
}
