import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Progress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  progress: string;

  @Column()
  idUser: string;

  @Column()
  idChallenge: string;

  @Column()
  idBook: string;
}
