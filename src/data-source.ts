import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Article } from "./entity/Article";
import { Candidate } from "./entity/Candidate";
import { Vote } from "./entity/Vote";
import { Parties } from "./entity/Parties";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "FerariF12",
  database: "Micro_Apps",
  synchronize: true,
  logging: false,
  entities: [User, Article, Candidate, Vote, Parties],
  migrations: [],
  subscribers: [],
});
