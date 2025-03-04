import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auto } from './entities/auto.entity';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';

@Injectable()
export class AutosService implements OnModuleInit {
  constructor(
    @InjectRepository(Auto)
    private readonly autosRepository: Repository<Auto>,
  ) {}

  async onModuleInit() {
    await this.initializeData();
  }

  private async initializeData() {
    const count = await this.autosRepository.count();
    if (count === 0) {
      const initialAutos: Auto[] = [
        {
          id: '123e4567-e89b-12d3-a456-426614174000',
          placa: 'ABC-123',
          marca: 'Toyota',
          modelo: 2021,
          color: 'Rojo',
          fecha_ingreso: new Date('2021-10-10'),
        },
        {
          id: '123e4567-e89b-12d3-a456-426614174001',
          placa: 'DEF-456',
          marca: 'Honda',
          modelo: 2020,
          color: 'Azul',
          fecha_ingreso: new Date('2020-05-15'),
        },
        {
          id: '133e4567-e89b-12d3-a456-426614174002',
          placa: 'GHI-789',
          marca: 'Ford',
          modelo: 2019,
          color: 'Negro',
          fecha_ingreso: new Date('2019-08-20'),
        },
        {
          id: '123e4567-e89b-12d3-a456-426614174003',
          placa: 'JKL-012',
          marca: 'Chevrolet',
          modelo: 2018,
          color: 'Blanco',
          fecha_ingreso: new Date('2018-03-30'),
        },
      ];

      for (const auto of initialAutos) {
        await this.autosRepository.save(auto);
      }
    }
  }

  create(createAutoDto: CreateAutoDto): Promise<Auto> {
    const auto = this.autosRepository.create(createAutoDto);
    return this.autosRepository.save(auto);
  }

  findAll(): Promise<Auto[]> {
    return this.autosRepository.find();
  }

  async findOneByPlaca(placa: string): Promise<Auto> {
    const auto = await this.autosRepository.findOne({ where: { placa } });
    if (!auto) {
      throw new Error(`Auto with placa ${placa} not found`);
    }
    return auto;
  }

  async update(id: string, updateAutoDto: UpdateAutoDto): Promise<Auto> {
    await this.autosRepository.update(id, updateAutoDto);
    const auto = await this.autosRepository.findOne({ where: { id } });
    if (!auto) {
      throw new Error(`Auto with id ${id} not found`);
    }
    return auto;
  }

  async remove(id: string): Promise<void> {
    await this.autosRepository.delete(id);
  }
}