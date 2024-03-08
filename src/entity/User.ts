import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Article } from "./Article";
import { Vote } from "./Vote";

export enum Gender {
  Male = "Laki - Laki",
  Female = "Perempuan",
}

export enum Roles {
  Admin = "Admin",
  User = "User",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  address: string;

  @Column({
    type: "enum",
    enum: Gender,
    default: Gender.Male,
  })
  gender: Gender;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: Roles,
    default: Roles.Admin,
  })
  role: Roles;

  @OneToMany(() => Article, (article) => article.user)
  article: Article[];

  @OneToOne(() => Vote, (vote) => vote.user) 
  vote: Vote;
}