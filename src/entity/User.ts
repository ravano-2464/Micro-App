import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Article } from "./Article";

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
  alamat: string;

  @Column({
    type: "enum",
    enum: Gender,
    default: Gender.Male,
  })
  jenis_kelamin: Gender;

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
}
