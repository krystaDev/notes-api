import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './user.service';
import { User } from './user.entity';
import { TypeOrmTestModule } from '@devniel/nestjs-typeorm-testing/dist';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createTestConfiguration } from '../../core/database/test-db-setup';

describe('User Controller', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      imports: [
        ConfigModule,
        TypeOrmModule.forRoot(createTestConfiguration([User])),
        TypeOrmModule.forFeature([User])],
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
