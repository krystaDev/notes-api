import { Test, TestingModule } from '@nestjs/testing';
import { repositoriesUsedForTest, NoteBookService } from './note-book.service';
import { getTestingProviders } from '../../core/database/test-db-setup';
import { UserService } from '../user/user.service';

describe('NoteBookService', () => {
  let service: NoteBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteBookService, UserService, ...getTestingProviders(repositoriesUsedForTest)]
    }).compile();

    service = module.get<NoteBookService>(NoteBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
