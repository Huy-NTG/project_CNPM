import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // Khai báo đúng tên bảng trong MySQL
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @Column({ type: 'enum', enum: ['user', 'admin'], default: 'user' })
  role!: 'user' | 'admin';
}
