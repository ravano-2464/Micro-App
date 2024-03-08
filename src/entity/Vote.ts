import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Candidate } from "./Candidate";
import { User } from "./User";

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  candidate_id: number;

  @Column()
  user_id: number;

  @OneToOne(() => Candidate, (candidate) => candidate.vote) 
  @JoinColumn({ name: "candidate_id", referencedColumnName: "id" })
  candidate: Candidate;

  @OneToOne(() => User, (user) => user.vote) 
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: User;
}