import { Request, Response } from "express";
import VoteService from "../services/VoteService";

export default new (class VoteController {
  ///////////////// CREATE /////////////////
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      await VoteService.create(data);

      return res
        .status(200)
        .json({ message: "Create Data Vote Success", data });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

  ///////////////// FIND /////////////////
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const vote = await VoteService.find();

      return res.status(200).json(vote);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

  ///////////////// GET /////////////////
  async getOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const vote = await VoteService.getOne(id);

      return res.status(200).json(vote);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

  ///////////////// DELETE /////////////////
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      await VoteService.delete(id);
      return res.status(200).json({ message: "Delete Vote Success" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

  ///////////////// UPDATE /////////////////
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const { body } = req;
      await VoteService.update(body, id);
      return res.status(200).json({
        message: "Update Vote Success",
        data: { id: id, ...body },
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }
})();