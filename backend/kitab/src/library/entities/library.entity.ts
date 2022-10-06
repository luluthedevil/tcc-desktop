import { User } from "../../users/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from "typeorm";
import { Book } from "../../books/entities/book.entity";

@Entity()
export class Library {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, user => user.libraries, {onDelete: 'CASCADE'})
  user: User[];

  @ManyToMany((_type) => Book, (book) => book.id)
  books: Book[];
}
