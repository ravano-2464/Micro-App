import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { User } from "./User";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createdDate: Date;

  @Column()
  user_id: number;

  @ManyToOne(() => User, (user) => user.article)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: User;
}