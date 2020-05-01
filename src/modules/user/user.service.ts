import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { IUserResponseDto } from './dto/user-response.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Provider } from '../auth/provider.enum';
import { NoteBookService } from '../note-book/note-book.service';
import { NoteBook } from '../note-book/note-book.entity';

export const repositoriesUsedForTest = [NoteBook, User];

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @Inject(forwardRef(() => NoteBookService))
    private noteBookService: NoteBookService
  ) {}
  public async findOneByThirdPartyId(
    thirdPartyId: string,
    provider: Provider
  ): Promise<IUserResponseDto> {
    return await this.userRepository.findOne({
      email: thirdPartyId,
      provider: provider
    });
  }

  public async registerOAuthUser(
    thirdPartyId: string,
    provider: Provider,
    firstName: string,
    lastName: string
  ) {
    const user = this.userRepository.create({
      provider,
      email: thirdPartyId,
      firstName,
      lastName
    });

    const result = await this.userRepository.save(user);
    await this.noteBookService.createDefaultNoteBook(result.id);

    return result;
  }

  public async getUserById(id: string) {
    return await this.userRepository.findOne({ id: id });
  }
}
