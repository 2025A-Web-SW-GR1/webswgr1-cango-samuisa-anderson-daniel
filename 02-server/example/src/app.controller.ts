import {
  Controller,
  Get,
  Param,
  Query,
  Headers,
  Post,
  Body,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/ejemplo/:id') // /ejemplo/1?hola=mundo
  @HttpCode(200)
  ejemplo(
    @Param('id') id, // Parametro de Ruta llamado 'id'
    @Query('hola') hola, // Parametro de consulta llamado 'hola'
    @Headers('escuela') escuela, // Cabecera con nombre 'escuela'
    @Body('monto') monto, // Campo del cuerpo llamado 'monto'
  ): string {
    return id + hola + ' Funcionando ' + escuela + monto;
  }

  private casas = [
    { id: 1, nombre: 'Casa 1' },
    { id: 2, nombre: 'Casa 2' },
  ];

  @Get('/casa')
  @HttpCode(200)
  casa(@Query('idCasa') idCasa?: string) {
    if (!idCasa) {
      return this.casas;
    }

    const id = parseInt(idCasa, 10);
    const casa = this.casas.find((c) => c.id === id);

    if (!casa) {
      throw new NotFoundException('No se encuentra');
    }

    return [casa];
  }
}
