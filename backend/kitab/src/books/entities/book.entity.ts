import {
    Entity,
    Column,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
    ManyToOne,
  } from "typeorm";
  import { User } from "../../users/entities/user.entity";
  import { Library } from "../../library/entities/library.entity";
  
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
  
    @ManyToMany(() => User)
    @JoinTable()
    users: User[];

    @ManyToOne(() => Library, (library) => library.id)
    library: Library;
  }
  