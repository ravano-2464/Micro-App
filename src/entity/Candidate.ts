import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vote } from "./Vote";

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  candidate_name: string;

  @Column()
  serial_number: number;

  @Column()
  vision_mission: string;

  @OneToOne(() => Vote, (vote) => vote.candidate) // specify inverse side as a second parameter
  vote: Vote;
}