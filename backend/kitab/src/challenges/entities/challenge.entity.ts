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
  quantity: number;

  // @Column()
  // periodOfTime: string; // move to progress

  // @ManyToMany(() => Progress)
  // @JoinTable()
  // progresses: Progress[];
}
