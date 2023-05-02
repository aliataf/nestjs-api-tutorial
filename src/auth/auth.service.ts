import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { msg: 'I am logged up' };
  }

  signup() {
    return { msg: 'I am signed up' };
  }
}
