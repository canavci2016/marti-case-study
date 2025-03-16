import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  lat: string;

  @Column()
  lng: string;

  @ManyToOne(() => User, (user) => user.locations)
  user: User;

  @Column({ type: 'int' })
  userId: number;
}
