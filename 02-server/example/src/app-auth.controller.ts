//======================= TRABAJO EN CLASE ============================
import {
  Controller,
  Get,
  Session,
  Post,
  Body,
  Req,
  Res,
  Query,
} from '@nestjs/common';
import { CasaService } from './casa/casa.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly casaService: CasaService) {}

  @Get('login-vista')
  async loginVista(@Res() res: any, @Query() query: { mensaje?: string }) {
    res.render('login', {
      mensaje: query.mensaje ?? '',
    });
  }

  // LoginMetodo
  @Post('login')
  async login(
    @Body() login: { username: string; password: string; rest?: boolean },
    @Session() session: Record<string, any>,
    @Res() res: Response,
  ) {
    try {
      if (login.username === 'daniel' && login.password === 'admin') {
        session.usuario = {
          id: 0,
          username: 'daniel',
          nombre: 'Daniel',
          rol: 'admin',
        };

        if (login.rest) {
          return {
            mensaje: 'Usuario logeado exitosamente (quemado)',
          };
        }
        return res.redirect('/api/casa/tabla');
      }

      const respuesta = await this.casaService.buscarUnoPorUsername(
        login.username,
      );

      if (!respuesta) {
        return res.redirect('/auth/login-vista?mensaje=Usuario no encontrado');
      }

      if (respuesta.password === login.password) {
        session.usuario = { ...respuesta };

        if (login.rest) {
          return {
            mensaje: 'Usuario logeado exitosamente',
          };
        }
        return res.redirect('/api/casa/tabla');
      } else {
        return res.redirect(
          '/auth/login-vista?mensaje=Usuario y password no coinciden',
        );
      }
    } catch (e) {
      console.error('Error en login:', e);
      return res.redirect(
        '/auth/login-vista?mensaje=Error interno del servidor',
      );
    }
  }

  // Eliminar la sesion
  @Get('logout')
  logout(@Req() req: any, @Res() res: any) {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
      }
    });
    res.redirect('/auth/login-vista');
  }

  @Get('sesion')
  async sesion(@Res() res: any, @Session() session: Record<string, any>) {
    // Using @Session() decorator
    let casa: any = {};
    if (session?.user?.username) {
      try {
        casa = await this.casaService.buscarUnoPorUsername(
          session.user.username,
        );
      } catch (e) {
        console.error('No se encontro usuario');
      }
    }
    res.render('sesion', {
      casa,
    });
  }
}
