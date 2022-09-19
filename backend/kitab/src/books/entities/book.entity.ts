import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "@/users/entities/user.entity";
import { Library } from "@/library/entities/library.entity";
  
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

    @ManyToMany(() => Library, (library) => library.id, {onDelete: 'SET NULL'})
    @JoinTable()
    library: Library[];
  }
  