import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { TypeOrmTestModule } from '@devniel/nestjs-typeorm-testing';
import { User } from './user.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createTestConfiguration } from '../../core/database/test-db-setup';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ ConfigModule,
        TypeOrmModule.forRoot(createTestConfiguration([User])),
        TypeOrmModule.forFeature([User])],

      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
