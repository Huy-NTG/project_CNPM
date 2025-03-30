import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { User } from './modules/user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'deliveryfooddb',
      entities: [User], // Đăng ký entity
      synchronize: true, // Chỉ dùng trong môi trường phát triển
    }),
    UserModule,
  ],
})
export class AppModule {}
