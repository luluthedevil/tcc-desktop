import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './books/entities/book.entity';
import { Challenge } from './challenges/entities/challenge.entity';
import { Library } from './library/entities/library.entity';
import { Progress } from './progress/entities/progress.entity';
import { User } from './users/entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Progress) private progressesRepository: Repository<Progress>,
    @InjectRepository(Library) private librariesRepository: Repository<Library>,
    @InjectRepository(Challenge) private challengesRepository: Repository<Challenge>,
    @InjectRepository(Book) private booksRepository: Repository<Book>
  ){}

  seed() {

  }

  getAllUsersBooks(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['book']
    }); // select * user join books
  }

  customQUery(): any {
    return this.userRepository.createQueryBuilder("user").select("name").where("favorite")
    //make one for favorite books
  }


  getHello(): string {
    return 'Hello nest!';
  }
}
