import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Location } from '../locations/location.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Location, (location) => location.user)
  locations: Location[];
}
