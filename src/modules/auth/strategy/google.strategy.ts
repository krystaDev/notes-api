import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import { ConfigService } from '@nestjs/config';
import { ConfigurationEnum } from '../../../core/config/configuration.enum';
import { Provider } from '../auth.service';


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google')
{

  constructor(private configService: ConfigService)
  {
    super({
      clientID    : configService.get(ConfigurationEnum.googleClientId),
      clientSecret: configService.get(ConfigurationEnum.googleSecret),
      callbackURL : configService.get(ConfigurationEnum.googleCallbackUrl),
      passReqToCallback: true,
      scope: ['profile']
    })
  }


  async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function)
  {
    try
    {
      console.log(profile);

      const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.GOOGLE);
      const user =
        {
          jwt
        }

      done(null, user);
    }
    catch(err)
    {
      // console.log(err)
      done(err, false);
    }
  }

}