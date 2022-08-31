import { User } from "src/users/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, ManyToOne } from "typeorm";
import { Book } from "../../books/entities/book.entity";

@Entity()
export class Library {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  idUser: string;

  @ManyToOne(() => User, (user) => user.libraries)
  user: User;

  @OneToMany((_type) => Book, (book) => book.ISBN)
  @JoinTable()
  books: Book[];
}
