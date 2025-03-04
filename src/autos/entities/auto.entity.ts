import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  placa: string;

  @Column()
  marca: string;

  @Column()
  modelo: number;

  @Column()
  color: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_ingreso: Date;
}