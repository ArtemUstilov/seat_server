import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';
import { Photo } from './photo.entity';

@Entity({ name: 'filial' })
export class Filial {

  @PrimaryColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'double precision' })
  lat: number;

  @Column({ type: 'double precision' })
  lng: number;

  @Column({ type: 'integer' })
  total_seats: number;

  @Column({ type: 'integer' })
  taken_seats: number;

  @Column({ type: 'varchar', length: 500 })
  description: string;

  @OneToMany(() => Photo, photo => photo.filial)
  photos: Photo[]
}