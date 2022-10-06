import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "@/users/entities/user.entity";
import { Library } from "@/library/entities/library.entity";
  
  @Entity()
  export class Book {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({nullable: true})
    ISBN_10: string;

    @Column({nullable: true})
    ISBN_13: string;
  
    @Column()
    bookName: string;

    @Column({nullable: true})
    authorName: string;
  
    @Column()
    pageNumber: number;
  
    @Column({nullable: true})
    genre: string;

    @Column({nullable: true})
    publiYear: string;

    @Column({nullable: true})
    description: string;
  
    @ManyToMany(() => User)
    @JoinTable()
    users: User[];

    @ManyToMany(() => Library, (library) => library.id, {onDelete: 'SET NULL'})
    @JoinTable()
    library: Library[];
  }

  // insert into book ("ISBN_10", "ISBN_13", "bookName","authorName", "pageNumber", "genre", "publiYear", "description")  select isbn_10, isbn_13, titulo, autor, paginas, genero, ano, descricao from books_portuguese
