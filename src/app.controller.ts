import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


export type IApiVersionResponse =  {
  version: string;
}

@Controller()
@ApiTags('API')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('version')
  @ApiOperation({description: 'Returning API version'})
  getVersion(): IApiVersionResponse {
    return { version: this.appService.version()};
  }
}
