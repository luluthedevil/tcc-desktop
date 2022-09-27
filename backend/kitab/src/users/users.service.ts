import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { CreateUserDto } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor( @InjectRepository(User)
  private userRepository: Repository<User> ) {}

  create(username: string, email: string): Promise<User> {
    const newUser = this.userRepository.create({username, email});
    return this.userRepository.save(newUser); // insert or update
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail({where: {id: id}});
      return user;
    } catch (err) {
      throw err;
    }
  }

  async update(id: number, username: string): Promise<User> {
    const user = await this.findOne(id);
    user.username = username;
    return this.userRepository.save(user); //update
  }

  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);
    return this.userRepository.remove(user);
  }
}
