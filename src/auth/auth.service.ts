import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { RegisterAuthDto } from './register-auth.dto';
import { LoginAuthDto } from './login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterAuthDto) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    return this.usersService.create({
      ...registerDto,
      password: hashedPassword,
    });
  }

  async login(loginDto: LoginAuthDto) {
    const user = await this.usersService.findByEmail(loginDto.email);
    if (!user) throw new UnauthorizedException();

    const match = await bcrypt.compare(loginDto.password, user.password);
    if (!match) throw new UnauthorizedException();

    const payload = { sub: user._id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
