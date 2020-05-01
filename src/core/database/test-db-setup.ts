import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Provider } from '@nestjs/common';

type Entity = Function;

export const getTestingProviders = (entities: Entity[]): Provider[] =>
  entities.map((entitie: Entity) => ({
    provide: getRepositoryToken(entitie),
    useClass: Repository
  }));
