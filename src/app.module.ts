import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { EntrepriseModule } from './entreprise/entreprise.module';
import { ClientModule } from './client/client.module';
import { RendezVousModule } from './rendez-vous/rendez-vous.module';
import { DocumentTemplatesModule } from './document-templates/document-templates.module';
import { DocumentModule } from './document/document.module';
import { BienModule } from './bien/bien.module';
import { FactureModule } from './facture/facture.module';
import { FactureBienModule } from './facture-bien/facture-bien.module';
import { PaimentModule } from './paiment/paiment.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    UtilisateurModule,
    EntrepriseModule,
    ClientModule,
    RendezVousModule,
    DocumentTemplatesModule,
    DocumentModule,
    BienModule,
    FactureModule,
    FactureBienModule,
    PaimentModule,
    AuthModule, // AuthModule now handles JWT/Passport imports and providers internally
    PrismaModule,
  ],
  controllers: [AppController], // ONLY app controller here
  providers: [AppService], // ONLY app service here
})
export class AppModule {}
