import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { CreateBookDto } from './dto/create-book.dto';
//import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor( @InjectRepository(Book)
  private bookRepository: Repository<Book> ) {}

  create(bookName: string, genre: string): Promise<Book> {
    const newBook = this.bookRepository.create({bookName, genre});
    return this.bookRepository.save(newBook); // insert or update
  }

  async findAll(limit: number, offset: number): Promise<Book[]> {
    console.log(limit, offset)
    return this.bookRepository.find({
      take: limit,
      skip: offset
    });
  }

  async findOne(id: number): Promise<Book> {
    try {
      const book = await this.bookRepository.findOneOrFail({where: {id: id}});
      return book;
    } catch (err) {
      throw err;
    }
  }

  async update(id: number, bookName: string): Promise<Book> {
    const book = await this.findOne(id);
    book.bookName = bookName;
    return this.bookRepository.save(book); //update
  }

  async remove(id: number): Promise<Book> {
    const book = await this.findOne(id);
    return this.bookRepository.remove(book);
  }
}
