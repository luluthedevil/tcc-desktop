import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Book } from "../../books/entities/book.entity";

@Entity()
export class Library {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  idUser: string;

  @OneToMany((_type) => Book, (book) => book.ISBN)
  books: Book[];
}
