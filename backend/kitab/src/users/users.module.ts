import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { BooksModule } from '@/books/books.module';
import { Book } from '@/books/entities/book.entity';

@Module({
  controllers: [UsersController],
  imports: [
    TypeOrmModule.forFeature([User, Book]),
    BooksModule
  ],
  exports: [UsersService],
  providers: [UsersService]
})
export class UsersModule {}
