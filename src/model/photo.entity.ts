import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Filial } from './filial.entity';

@Entity({ name: 'photo' })
export class Photo {

  @PrimaryColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'varchar', nullable: true })
  base64: string;

  @Column({ type: 'integer', nullable: true })
  filial_id: number;

  @ManyToOne(() => Filial, filial => filial.photos)
  @JoinColumn({ name: "filial_id", referencedColumnName: "id"})
  filial: Filial;
}