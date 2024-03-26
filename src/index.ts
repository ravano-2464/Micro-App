import { AppDataSource } from "./data-source";
import express, { Request, Response } from "express";
import Route from "./routes";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 5000;

    app.use(express.json());
    app.use("/api/", Route);

    app.get("/hallo", (req: Request, res: Response) => {
      res.status(200).json({ data: "succsess get data" });
    });

    app.listen(port, () => console.log(`server succsess on port ${port}`));
  })
  .catch((error) => console.log(error));
