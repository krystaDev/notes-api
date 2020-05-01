import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { NoteBook } from './note-book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

export const repositoriesUsedForTest = [NoteBook, User];

@Injectable()
export class NoteBookService {
  constructor(
    @InjectRepository(NoteBook)
    private readonly noteBookRepository: Repository<NoteBook>,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService
  ) {}

  async createDefaultNoteBook(userId: string) {
    const user = await this.userService.getUserById(userId);
    const noteBook = await this.noteBookRepository.create({
      name: 'default',
      user
    });

    return await this.noteBookRepository.save(noteBook);
  }
}
