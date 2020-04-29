import { Injectable } from '@nestjs/common';
import { IUserResponseDto } from './dto/user-response.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Provider } from '../auth/provider.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>) {
  }
  public async findOneByThirdPartyId(thirdPartyId: string, provider: Provider): Promise<IUserResponseDto> {
    return await this.userRepository.findOne({
      email: thirdPartyId,
      provider: provider
    });
  }

  public async registerOAuthUser(thirdPartyId: string, provider: Provider, firstName: string, lastName: string) {
    const user = this.userRepository.create({
      provider,
      email: thirdPartyId,
      firstName,
      lastName
    });

    return this.userRepository.save(user);
  }

  public async getUserById(id: string) {
    return await this.userRepository.findOne({ id: id })
  }
}
