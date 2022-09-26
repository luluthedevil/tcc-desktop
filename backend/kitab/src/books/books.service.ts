import { Inject, Injectable } from '@nestjs/common';
//import { CreateBookDto } from './dto/create-book.dto';
//import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor( @Inject('Book_REPOSITORY')
  private bookRepository: Repository<Book> ) {}

  create(bookName: string): Promise<Book> {
    const newBook = this.bookRepository.create({bookName});
    return this.bookRepository.save(newBook); // insert or update
  }

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
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
