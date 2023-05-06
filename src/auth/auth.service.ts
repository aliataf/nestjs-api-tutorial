import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  login() {
    return { msg: 'I am logged up' };
  }

  signup(dto: AuthDto) {
    return { msg: 'I am signed up' };
  }
}
