import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { ConfigurationEnum } from '../../core/config/configuration.enum';
import { UserService } from '../user/user.service';
import { IUserResponseDto } from '../user/dto/i-user-response.dto';
import { Provider } from './provider.enum';

@Injectable()
export class AuthService {

  private readonly JWT_SECRET_KEY = this.configService.get(ConfigurationEnum.jwtSecret); // <- replace this with your secret key
  private readonly token_valid_time = this.configService.get(ConfigurationEnum.jwtValidTime)

  constructor(private readonly userService: UserService,
              private readonly configService: ConfigService) {};

  async validateOAuthLogin(thirdPartyId: string, provider: Provider, firstName: string, lastName: string): Promise<string>
  {
    try
    {
      // You can add some registration logic here,
      // to register the user using their thirdPartyId (in this case their googleId)
      let user: IUserResponseDto = await this.userService.findOneByThirdPartyId(thirdPartyId, provider);

      if (!user)
      user = await this.userService.registerOAuthUser(thirdPartyId, provider, firstName, lastName);

      const payload = {
        ...user
      }

      const jwt: string = sign(payload, this.JWT_SECRET_KEY, { expiresIn: this.token_valid_time });
      return jwt;
    }
    catch (err)
    {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }

}