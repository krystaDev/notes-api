import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategy/google.strategy';
import { UserModule } from '../user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  imports: [UserModule, ConfigModule],
  providers: [AuthService,
  GoogleStrategy]
})
export class AuthModule {}
