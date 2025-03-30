import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // eslint-disable-next-line prettier/prettier
  async register(username: string, password: string, role: 'user' | 'admin' = 'user') {
    const user = this.usersRepository.create({ username, password, role });
    return this.usersRepository.save(user);
  }

  async login(username: string, password: string) {
    return this.usersRepository.findOne({ where: { username, password } });
  }
}
