import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('User')
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  getUser(@Request() req) {
    return this.userService.getUserById(req.user.id);
  }
}
