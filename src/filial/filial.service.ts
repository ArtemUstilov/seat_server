import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Filial } from '../model/filial.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FilialService {
  constructor(@InjectRepository(Filial) private readonly repo: Repository<Filial>) {
  }

  public async findAll() {
    return await this.repo.query("SELECT id, name, total_seats, taken_seats, lat, lng FROM filial");
  }

  public async find(id) {
    return await this.repo.find({
      where: { id },
      relations: ["photos"],
    });
  }

  public async create(filial: Filial){
    console.log(filial)
    return await this.repo.insert(filial);
  }

}
