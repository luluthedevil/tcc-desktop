import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Progress } from "../../progress/entities/progress.entity";

@Entity()
export class Challenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  quantity: string;

  @Column()
  periodOfTime: string;

  @ManyToMany((_type) => Progress, (progress) => progress.idUser)
  progresses: Progress[];
}
