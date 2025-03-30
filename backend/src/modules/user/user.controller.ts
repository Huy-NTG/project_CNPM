import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  // eslint-disable-next-line prettier/prettier
  async register(@Body() body: { username: string; password: string; role?: 'user' | 'admin' }) {
    return this.usersService.register(body.username, body.password, body.role);
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.usersService.login(body.username, body.password);
    if (!user) {
      return { message: 'Sai tài khoản hoặc mật khẩu' };
    }
    return { message: 'Đăng nhập thành công', user };
  }
}
