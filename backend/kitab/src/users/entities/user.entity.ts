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

    @ManyToMany(() => Book)
    books: Book[];
  
    @OneToMany(() => Library, library => library.user)
    libraries: Library[];
  }
  