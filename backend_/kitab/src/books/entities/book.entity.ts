import {
    Entity,
    Column,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    ManyToMany,
  } from "typeorm";
  import { User } from "../../users/entities/user.entity";
  
  @Entity()
  export class Book {
    @PrimaryGeneratedColumn()
    id: number;
  
    @PrimaryColumn()
    ISBN: string;
  
    @Column()
    bookName: string;
  
    @Column()
    pageNumber: number;
  
    @Column()
    genre: string;
  
    @ManyToMany((_type) => User, (user) => user.books)
    users: User[];
  }
  