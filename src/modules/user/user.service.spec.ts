import { Test, TestingModule } from '@nestjs/testing';
import { repositoriesUsedForTest, UserService } from './user.service';
import { ConfigModule } from '@nestjs/config';
import { getTestingProviders } from '../../core/database/test-db-setup';
import { NoteBookService } from '../note-book/note-book.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [UserService, NoteBookService, ...getTestingProviders(repositoriesUsedForTest)]
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
