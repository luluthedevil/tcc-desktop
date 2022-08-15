import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    OneToMany,
  } from "typeorm";
  import { Book } from "../../books/entities/book.entity";
  import { Library } from "../../library/entities/library.entity";
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    username: string;
  
    @Column()
    email: string;
  
    @ManyToMany((_type) => Book, (book) => book.users)
    books: Book[];
  
    @OneToMany((_type) => Library, (library) => library.idUser)
    libraries: Library[];
  }
  