import { Entity, Column } from 'typeorm';
import { Provider } from '../auth/provider.enum';
import { DbBaseEntity } from '../../core/database/db-base.entity';

@Entity()
export class User extends DbBaseEntity{
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