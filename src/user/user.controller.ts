import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';

import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  getMe(@GetUser('id') user): User {
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
