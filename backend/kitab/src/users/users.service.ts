import { Book } from '@/books/entities/book.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { CreateUserDto } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor( @InjectRepository(User)
  private userRepository: Repository<User>, @InjectRepository(Book)
  private bookRepository: Repository<Book> ) {}

  private readonly users: User[] = [
    {
      id: 2,
      name: 'Julia',
      username: 'juju',
      email: 'julia@gmail.com',
      password: '654123',
      books: []
    },
    {
      id: 3,
      name: 'Victor',
      username: 'vkt',
      email: 'vkt@gmail.com',
      password: '654123',
      books: []
    },
  ];

  create(username: string, email: string, password: string): Promise<User> {
    const newUser = this.userRepository.create({username, email, password});
    return this.userRepository.save(newUser); // insert or update
  }

  async addUserBook(id: any, bookId: number) {
    const user = await this.userRepository.findOneOrFail(
      {where: {id: id}, relations: ['books']}
    );
   //pegar os dados da api do google
   //salvar as informações do livro associando ao id do usuário
   // { user: '65552', book: {...} }
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findUserBooks(id: number) {
    return this.userRepository.find({
      where: {
        id: id
      },
      select: {
        books: true
      }
    });
  }

  async findOne(id: number): Promise<User | undefined> {
    try {
      const user = await this.userRepository.findOneOrFail({where: {id: id}});
      return user;
    } catch (err) {
      throw err;
    }
  }
  //mudar para procurar no banco
  async findOneUser(username: string): Promise<User | undefined> {
      return this.users.find(user => user.username === username);
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
