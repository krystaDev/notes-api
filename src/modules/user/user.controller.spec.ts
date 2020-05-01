import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { repositoriesUsedForTest, UserService } from './user.service';
import { getTestingProviders } from '../../core/database/test-db-setup';
import { NoteBookService } from '../note-book/note-book.service';

describe('User Controller', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, NoteBookService, ...getTestingProviders(repositoriesUsedForTest)],
      controllers: [UserController]
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
