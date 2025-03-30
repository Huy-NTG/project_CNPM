import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { User } from './user.entity'; // Import entity User

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Đăng ký entity
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Xuất service để module khác có thể sử dụng
})
export class UserModule {}
