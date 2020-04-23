import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigurationEnum } from './core/config/configuration.enum';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {
  }
  version(): string {
    return this.configService.get(ConfigurationEnum.appVersion)
  }
}
