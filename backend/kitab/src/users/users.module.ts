import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Library } from 'src/library/entities/library.entity';
import { Book } from 'src/books/entities/book.entity';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'pguser',
      password: 'pgpassword',
      database: 'postgres',
      entities: [User, Library, Book],
      synchronize: true,
  }), TypeOrmModule.forFeature([Library])],
  providers: [UsersService]
})
export class UsersModule {}
