import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Candidate } from "./Candidate";

@Entity()
export class Parties {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parties_name: string;

  @Column()
  parties_chairman: string;

  @Column()
  vision_mission: string;

  @Column()
  parties_address: string;

  @Column()
  parties_image: string;

  @Column()
  candidate_id: number;

  @ManyToOne(() => Candidate, (candidate) => candidate.parties)
  @JoinColumn({ name: "candidate_id" })
  candidate: Candidate;
}
