import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import { ConfigService } from '@nestjs/config';
import { ConfigurationEnum } from '../../../core/config/configuration.enum';
import { AuthService, Provider } from '../auth.service';


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google')
{

  constructor(private configService: ConfigService,
              private authService: AuthService)
  {
    super({
      clientID    : configService.get(ConfigurationEnum.googleClientId),
      clientSecret: configService.get(ConfigurationEnum.googleSecret),
      callbackURL : configService.get(ConfigurationEnum.googleCallbackUrl),
      passReqToCallback: true,
      scope: ['profile', 'email']
    })
  }


  async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function)
  {
    try
    {
      const email = profile.emails.find(e => e.verified === true).value;
      const firstName = profile.name.givenName;
      const lastName = profile.name.familyName;

      const payload: string = await this.authService.validateOAuthLogin(email, Provider.GOOGLE, firstName, lastName);
      const user =
        {
          jwt: payload
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