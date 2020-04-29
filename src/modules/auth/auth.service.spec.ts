import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { User } from '../user/user.entity';
import { TypeOrmTestModule } from '@devniel/nestjs-typeorm-testing';
import { UserService } from '../user/user.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, TypeOrmTestModule.forTest([User])],
      controllers: [AuthController],
      providers: [AuthService, UserService],
    }).compile();


    service = await module.resolve<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
