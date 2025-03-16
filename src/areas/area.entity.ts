import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Area {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  lat: string;

  @Column()
  lng: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column({ type: 'int' })
  userId: number;
}
