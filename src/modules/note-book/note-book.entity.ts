import { Column, Entity, ManyToOne } from 'typeorm';
import { DbBaseEntity } from '../../core/database/db-base.entity';
import { User } from '../user/user.entity';

@Entity()
export class NoteBook extends DbBaseEntity {
  constructor(data) {
    super();

    Object.assign(this, data);
  }

  @Column({ nullable: false })
  public name: string;

  @ManyToOne(
    () => User,
    user => user.notebooks
  )
  public user: User;
}
