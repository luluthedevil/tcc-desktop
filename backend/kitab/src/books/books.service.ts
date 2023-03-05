import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { CreateBookDto } from './dto/create-book.dto';
//import { UpdateBookDto } from './dto/update-book.dto';
import { UpdateBookModelDto } from './dto/update-book-model.dto';
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
    return await this.bookModel.find({
      order: {
        dateAdded: "asc"
      }
    });
  }

  //get one book in mongo
  async getOneInMongo(id: string): Promise<BookAPI> {
    const book = await this.bookModel.findById({_id: id});
    return book;
  }

  //get one book in mongo by isbn
  async getOneInMongoByISBN(isbn: string) {
    const book = await this.bookModel.find({
      $or: [{isbn13: isbn}],
      $and: [{isbn13: isbn}]
    });
    return book;
  }

  //delete one book in mongo
  async deleteOneInMongo(id: string): Promise<BookAPI> {
    const book = await this.getOneInMongo(id);
    return await this.bookModel.remove(book);
  }

  async getSize() {
    return await this.bookModel.find({
      $or: [{isRead: true}],
      $and: [{isRead: true}]
    })
    .then((books)=> {return books})
    .catch((err) => console.log(err))
  }

  async findAll(limit: number, offset: number): Promise<Book[]> {
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

  async update(id: string, bookModelData: UpdateBookModelDto): Promise<BookAPIDocument> {
    return await this.bookModel.findByIdAndUpdate(id, bookModelData);
  }

  async remove(id: string): Promise<Book> {
    return await this.bookModel.findByIdAndRemove(id);
  }
}
