import { Request, Response } from "express";
import CandidateService from "../services/CandidateService";
import { candidateValidator } from "../validator/CandidateValidator";

export default new (class CandidateController {
  ///////////////// CREATE /////////////////
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const { error, value } = candidateValidator.validate(data);

      if (error)
        return res.status(400).json({ message: error.details[0].message });

      await CandidateService.create(value);

      return res
        .status(200)
        .json({ message: "Create data Candidate Success", data });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

  ///////////////// FIND /////////////////
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const candidate = await CandidateService.find();

      return res.status(200).json(candidate);
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
      const candidate = await CandidateService.getOne(id);

      return res.status(200).json(candidate);
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
      await CandidateService.delete(id);
      return res.status(200).json({ message: "Delete Candidate Success" });
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
      await CandidateService.update(body, id);
      return res.status(200).json({
        message: "Update Candidate Success",
        data: { id: id, ...body },
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }
})();