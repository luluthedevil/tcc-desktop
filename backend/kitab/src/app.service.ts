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

  getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  getAllUsersBooks(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['book']
    }); // select * user join books
  }

  async getUserById(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail({where: {id: id}});
      return user;
    } catch (err) {
      throw err;
    }
  }

  createUser(username: string, email: string): Promise<User> {
    const newUser = this.userRepository.create({username, email});
    return this.userRepository.save(newUser); // insert or update
  }

  async updateUser(id: number, username: string): Promise<User> {
    const user = await this.getUserById(id);
    user.username = username;
    return this.userRepository.save(user); //update
  }

  async deleteUser(id:number): Promise<User> {
    const user = await this.getUserById(id);
    return await this.userRepository.remove(user);
  }

  customQUery(): any {
    return this.userRepository.createQueryBuilder("user").select("name").where("favorite")
    //make one for favorite books
  }


  getHello(): string {
    return 'Hello nest!';
  }
}
