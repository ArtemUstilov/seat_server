import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FilialService } from './filial.service';
import { Filial } from '../model/filial.entity';

@Controller('filial')
export class FilialController {
  constructor(private serv: FilialService) { }

  @Get()
  findAll(): Promise<Filial[]> {
    return this.serv.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Filial[]> {
    return this.serv.find(params.id);
  }

  @Post()
  create(@Body() filial: Filial){
    return this.serv.create(filial);
  }
}