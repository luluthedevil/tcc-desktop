import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { HttpModule } from '@nestjs/axios';
import { BookAPISchema } from './entities/book.models';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [BooksController],
  imports: [
    TypeOrmModule.forFeature([Book]), HttpModule,
    MongooseModule.forFeature([{name: 'book_api', schema: BookAPISchema}]),
  ],
  providers: [BooksService,]
})
export class BooksModule {}
