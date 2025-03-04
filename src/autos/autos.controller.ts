import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { AutosService } from './autos.service';
import { CreateAutoDto } from './dto/create-auto.dto';

@Controller('autos')
export class AutosController {
  constructor(private readonly autosService: AutosService) {}

  @Get()
  findAll() {
    return this.autosService.findAll();
  }

  @Get(':placa')
  findOne(@Param('placa') placa: string) {
    return this.autosService.findOneByPlaca(placa);
  }

  @Post()
  create(@Body() createAutoDto: CreateAutoDto) {
    return this.autosService.create(createAutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autosService.remove(id);
  }
}