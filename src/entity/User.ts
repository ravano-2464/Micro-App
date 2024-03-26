import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Article } from "./Article";
import { Vote } from "./Vote";

// export enum GenderType {
//   MALE = "Male",
//   FEMALE = "Female",
// }

// export enum RolesType {
//   ADMIN = "Admin",
//   USER = "User",
// }

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  address: string;

  // @Column({
  //   type: "enum",
  //   enum: GenderType,
  //   default: GenderType.MALE,
  // })
  // gender: string;

  @Column()
  gender: string;

  @Column()
  username: string;

  @Column()
  password: string;

  // @Column({
  //   type: "enum",
  //   enum: RolesType,
  //   default: RolesType.ADMIN,
  // })
  // role: string;

  @Column()
  role: string;

  @OneToMany(() => Article, (article) => article.user)
  article: Article[];

  @OneToOne(() => Vote, (vote) => vote.user) // specify inverse side as a second parameter
  vote: Vote;
}
