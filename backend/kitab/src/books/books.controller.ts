import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BooksService } from './books.service';
//import { CreateBookDto } from './dto/create-book.dto';
//import { UpdateBookDto } from './dto/update-book.dto';
import { UpdateBookModelDto } from './dto/update-book-model.dto';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { BookAPI } from './entities/book.models';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService, private readonly httpService: HttpService) {}

  @Get('find')
  async findAll(@Query('nome') nome: string) {
    const { data } = await this.httpService
    .get(`https://www.googleapis.com/books/v1/volumes?q=${nome}&key=${process.env.API_KEY}&maxResults=20`)
    .toPromise();
    return data;
  }

  @Get('count')
  async getMongoSize() {
    return this.booksService.getSize();
  }

  @Get('count-unread')
  async getMongoSizeUnread() {
    return this.booksService.getSizeUnread();
  }

  @Get('isbn/:isbn13')
  async getOneInMongoISBN(@Param('isbn13') isbn: string) {
    return await this.booksService.getOneInMongoByISBN(isbn);
  }

  @Post()
  async saveInMongo(@Body() bookObj: BookAPI) {
    return this.booksService.saveInMongo(bookObj);
  }

  @Get()
  async getInMongo() {
    return this.booksService.getInMongo();
  }

  @Get(':id')
  async getOneInMongo(@Param('id') id: string) {
    return this.booksService.getOneInMongo(id);
  }

  @Delete(':id')
  async deleteOneInMongo(@Param('id') id: string) {
    return this.booksService.deleteOneInMongo(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() isRead: UpdateBookModelDto) {
    return this.booksService.update(id, isRead);
  }
}
