import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';

@Module({
  controllers: [BooksController],
  imports: [
    TypeOrmModule.forFeature([Book])],
  providers: [BooksService]
})
export class BooksModule {}
