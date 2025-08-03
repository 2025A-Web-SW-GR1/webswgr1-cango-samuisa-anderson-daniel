import { Inject, Injectable } from '@nestjs/common';
import { Casa } from './casa.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { CrearEditarBaseDto } from './dto/crear-editar.base.dto';

@Injectable()
export class CasaService {
  constructor(
    @Inject('CASA_REPOSITORY')
    private casaRepository: Repository<Casa>,
  ) {}

  obtenerTodos(options?: FindManyOptions<Casa> | undefined) {
    return this.casaRepository.find(options);
  }

  crearUno(valoresAActualizar: CrearEditarBaseDto) {
    let nuevaInstancia = this.casaRepository.create();
    nuevaInstancia = {
      ...valoresAActualizar,
    };
    return this.casaRepository.save(nuevaInstancia);
  }

  obtenerUnoPorId(id: number) {
    return this.casaRepository.findOneBy({ id });
  }

  async actualizarUnoPorId(valoresAActualizar: CrearEditarBaseDto, id: number) {
    const recordExist = await this.casaRepository.findOneByOrFail({ id });
    let nuevaInstancia = this.casaRepository.create();
    nuevaInstancia = {
      ...recordExist,
      ...valoresAActualizar,
    };
    return this.casaRepository.save(nuevaInstancia);
  }

  async actualizarArchivoPorId(
    valoresAActualizar: {
      fileContentType: string;
      filename: string;
      fileID: string;
    },
    id: number,
  ) {
    const recordExist = await this.casaRepository.findOneByOrFail({ id });
    let registroActualizar = this.casaRepository.create();
    registroActualizar = {
      ...registroActualizar,
      ...valoresAActualizar,
    };
    registroActualizar.id = recordExist.id;
    return this.casaRepository.save(registroActualizar);
  }

  eliminarUnoPorId(id: number) {
    return this.casaRepository.delete(id);
  }

  buscarUnoPorUsername(username: string) {
    return this.casaRepository.findOneByOrFail({ username });
  }

  async createExampleData(): Promise<void> {
    const existeCasas = await this.casaRepository.count();

    if (existeCasas === 0) {
      const casasEjemplo = [
        {
          nombre: 'Loft Urbano',
          valor: 180000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1494526585095-c41746248156?w=400',
          username: 'daniel',
          password: 'admin',
        },
        {
          nombre: 'Cabaña en el Bosque',
          valor: 95000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
          username: 'daniel',
          password: 'admin',
        },
        {
          nombre: 'Apartamento Minimalista',
          valor: 120000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1599427301572-6534f0df34b1?w=400',
          username: 'anderson',
          password: 'admin',
        },
        {
          nombre: 'Casa Rústica',
          valor: 135000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1572120360610-d971b9b78825?w=400',
          username: 'daniel',
          password: 'admin',
        },
        {
          nombre: 'Penthouse con Vista',
          valor: 420000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400',
          username: 'daniel',
          password: 'admin',
        },
        {
          nombre: 'Casa de Playa',
          valor: 300000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
          username: 'anderson',
          password: 'admin',
        },
        {
          nombre: 'Villa Mediterránea',
          valor: 380000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1600585154154-872376fbd3d2?w=400',
          username: 'daniel',
          password: 'admin',
        },
        {
          nombre: 'Casa Colonial',
          valor: 160000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1563720224657-9aa57d4aef3f?w=400',
          username: 'anderson',
          password: 'admin',
        },
        {
          nombre: 'Casa Moderna',
          valor: 250000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400',
          username: 'daniel',
          password: 'admin',
        },
        {
          nombre: 'Refugio de Montaña',
          valor: 110000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400',
          username: 'anderson',
          password: 'admin',
        },
        {
          nombre: 'Casa del Lago',
          valor: 200000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1600585153924-09b12a76da1c?w=400',
          username: 'daniel',
          password: 'admin',
        },
        {
          nombre: 'Casa Minimalista Negra',
          valor: 230000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1600585153833-8c3e86a3a4ba?w=400',
          username: 'anderson',
          password: 'admin',
        },
        {
          nombre: 'Residencia Familiar',
          valor: 190000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400',
          username: 'daniel',
          password: 'admin',
        },
        {
          nombre: 'Casa Contemporánea',
          valor: 270000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1597093208120-2b2aee803635?w=400',
          username: 'anderson',
          password: 'admin',
        },
        {
          nombre: 'Domo Ecológico',
          valor: 105000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1615873968403-89e5846a5d5f?w=400',
          username: 'daniel',
          password: 'admin',
        },
        {
          nombre: 'Casa Blanca de Campo',
          valor: 140000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400',
          username: 'anderson',
          password: 'admin',
        },
        {
          nombre: 'Casa de Bambú',
          valor: 97000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1583847268964-b28dc8f9d6ab?w=400',
          username: 'daniel',
          password: 'admin',
        },
        {
          nombre: 'Casa con Jardín Zen',
          valor: 155000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1625204608393-6d123ba31e14?w=400',
          username: 'anderson',
          password: 'admin',
        },
        {
          nombre: 'Casa Flotante',
          valor: 210000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1600585154075-e75c8937d30f?w=400',
          username: 'daniel',
          password: 'admin',
        },
        {
          nombre: 'Casa Industrial',
          valor: 185000.0,
          imagenURL:
            'https://images.unsplash.com/photo-1572120360610-d971b9b78825?w=400',
          username: 'anderson',
          password: 'admin',
        },
      ];

      for (const casaData of casasEjemplo) {
        const casa = this.casaRepository.create(casaData);
        await this.casaRepository.save(casa);
      }

      console.log('✅ Datos de ejemplo creados para el examen');
    }
  }
}
