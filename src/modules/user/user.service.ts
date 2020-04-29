import { Injectable } from '@nestjs/common';
import { Provider } from '../auth/auth.service';
import { ThirdPartUserInterface } from './dto/third-part-user.interface';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>) {
  }
  public async findOneByThirdPartyId(thirdPartyId: string, provider: Provider): Promise<ThirdPartUserInterface> {
    return await this.userRepository.findOne({
      email: thirdPartyId,
      provider: provider
    });
  }

  public async registerOAuthUser(thirdPartyId: string, provider: Provider) {
    const user = this.userRepository.create({
      provider,
      email: thirdPartyId
    });

    return this.userRepository.save(user);
  }
}
