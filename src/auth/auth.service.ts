import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  login() {
    return { msg: 'I am logged up' };
  }

  signup() {
    return { msg: 'I am signed up' };
  }
}
