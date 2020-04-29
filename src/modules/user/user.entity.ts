import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Provider } from '../auth/auth.service';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  firstName: string;

  @Column({nullable: true})
  lastName: string;

  @Column()
  email: string

  @Column({nullable: true, enum: Provider})
  provider: Provider

  @Column({ default: true })
  isActive: boolean;
}