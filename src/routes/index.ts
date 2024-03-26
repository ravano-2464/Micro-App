import express from "express";
import UserControllers from "../controllers/UserControllers";
import ArticleControllers from "../controllers/ArticleControllers";
import CandidateController from "../controllers/CandidateController";
import VoteControllers from "../controllers/VoteControllers";
import PartiesControllers from "../controllers/PartiesControllers";

const Route = express.Router();

//////////////// USERS /////////////////
Route.post("/user", UserControllers.create);
Route.get("/user", UserControllers.find);
Route.delete("/user/:id", UserControllers.delete);
Route.patch("/user/:id", UserControllers.update);
Route.patch("/user/:id", UserControllers.getOne);

//////////////// ARTICLE /////////////////
Route.post("/article", ArticleControllers.create);
Route.get("/article", ArticleControllers.find);
Route.delete("/article/:id", ArticleControllers.delete);
Route.patch("/article/:id", ArticleControllers.update);
Route.get("/article/:id", ArticleControllers.getOne);

//////////////// CANDIDATE /////////////////
Route.post("/candidate", CandidateController.create);
Route.get("/candidate", CandidateController.find);
Route.delete("/candidate/:id", CandidateController.delete);
Route.patch("/candidate/:id", CandidateController.update);
Route.get("/candidate/:id", CandidateController.getOne);

//////////////// VOTE /////////////////
Route.post("/vote", VoteControllers.create);
Route.get("/vote", VoteControllers.find);
Route.delete("/vote/:id", VoteControllers.delete);
Route.patch("/vote/:id", VoteControllers.update);
Route.get("/vote/:id", VoteControllers.getOne);

//////////////// PARTIES /////////////////
Route.post("/parties", PartiesControllers.create);
Route.get("/parties", PartiesControllers.find);
Route.delete("/parties/:id", PartiesControllers.delete);
Route.patch("/parties/:id", PartiesControllers.update);
Route.get("/parties/:id", PartiesControllers.getOne);

export default Route;