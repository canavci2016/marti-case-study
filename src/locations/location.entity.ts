import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'numeric', precision: 10, scale: 8 })
  lat: number;

  @Column({ type: 'numeric', precision: 11, scale: 8 })
  lng: number;

  @ManyToOne(() => User, (user) => user.locations)
  user: User;

  @Column({ type: 'int' })
  userId: number;
}
