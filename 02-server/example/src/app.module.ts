import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthController } from './app-auth.controller';
import { CasaModule } from './casa/casa.codule';

@Module({
  imports: [
    DatabaseModule, // Importa el módulo de la base de datos
    CasaModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
