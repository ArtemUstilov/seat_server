import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Filial } from '../model/filial.entity';
import { FilialService } from './filial.service';
import { FilialController } from './filial.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Filial])],
  providers: [FilialService],
  controllers: [FilialController],
  exports: []
})
export class FilialModule {}
