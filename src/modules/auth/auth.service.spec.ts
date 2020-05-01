import { Test, TestingModule } from '@nestjs/testing';
import { AuthService, repositoriesUsedForTest } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { NoteBookService } from '../note-book/note-book.service';
import { getTestingProviders } from '../../core/database/test-db-setup';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [AuthController],
      providers: [
        AuthService,
        UserService,
        NoteBookService,
        ...getTestingProviders(repositoriesUsedForTest)
      ]
    }).compile();

    service = await module.resolve<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
