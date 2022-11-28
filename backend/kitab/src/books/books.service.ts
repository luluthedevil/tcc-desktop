import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { CreateBookDto } from './dto/create-book.dto';
//import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { BookAPI, BookAPIDocument } from './entities/book.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BooksService {
  constructor( @InjectRepository(Book)
  private bookRepository: Repository<Book>, 
  @InjectModel('book_api') private readonly bookModel: Model<BookAPIDocument> ) {}


  //post book in mongo
  async saveInMongo(bookObj: BookAPI): Promise<BookAPI> {
    const newBook = await new this.bookModel(bookObj).save();
    return newBook; // insert or update
  }

  //get book in mongo
  async getInMongo() {
    return this.bookModel.find({})
    .then((book)=> {return book})
    .catch((err) => console.log(err))
  }

  //get one book in mongo
  async getOneInMongo(id: string): Promise<BookAPI> {
    const book = await this.bookModel.findById({_id: id});
    return book;
  }

  //delete one book in mongo
  async deleteOneInMongo(id: string): Promise<BookAPI> {
    const book = await this.getOneInMongo(id);
    return await this.bookModel.remove(book);
  }

  async getSize() {
    return this.bookModel.count();
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
