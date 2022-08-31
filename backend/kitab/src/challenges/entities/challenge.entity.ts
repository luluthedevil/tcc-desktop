import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
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

  @ManyToMany(() => Progress)
  @JoinTable()
  progresses: Progress[];
}
