import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { ConfigurationEnum } from '../../core/config/configuration.enum';
import { UserService } from '../user/user.service';
import { ThirdPartUserInterface } from '../user/dto/third-part-user.interface';

export enum Provider
{
  GOOGLE = 'google'
}

@Injectable()
export class AuthService {

  private readonly JWT_SECRET_KEY = this.configService.get(ConfigurationEnum.jwtSecret); // <- replace this with your secret key

  constructor(private readonly userService: UserService,
              private readonly configService: ConfigService) {

  };

  async validateOAuthLogin(thirdPartyId: string, provider: Provider): Promise<string>
  {
    try
    {
      // You can add some registration logic here,
      // to register the user using their thirdPartyId (in this case their googleId)
      let user: ThirdPartUserInterface = await this.userService.findOneByThirdPartyId(thirdPartyId, provider);

      if (!user)
      user = await this.userService.registerOAuthUser(thirdPartyId, provider);

      const payload = {
        ...user
      }

      const jwt: string = sign(payload, this.JWT_SECRET_KEY, { expiresIn: 3600 });
      return jwt;
    }
    catch (err)
    {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }

}