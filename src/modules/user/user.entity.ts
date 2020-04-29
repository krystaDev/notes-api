import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Provider } from '../auth/provider.enum';

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