import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EntitySchema } from 'typeorm';

type Entity = Function | string | EntitySchema<any>;

export const createTestConfiguration = (
  entities: Entity[],
): TypeOrmModuleOptions => ({
  type: 'sqlite',
  database: ':memory:',
  entities,
  dropSchema: true,
  synchronize: true,
  logging: false,
});