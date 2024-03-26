// Controllers for logical system application

import { Request, Response } from "express";
import PartiesService from "../services/PartiesService";
import { partiesValidator } from "../validator/PartiesValidator";

export default new (class PartiesControllers {
  ///////////////// CREATE /////////////////
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const { error, value } = partiesValidator.validate(data);

      if (error)
        return res.status(400).json({ message: error.details[0].message });

      const parties = await PartiesService.create(value);

      return res.status(201).json(parties);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

  ///////////////// FIND /////////////////
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const parties = await PartiesService.find();

      return res.status(200).json(parties);
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
      const parties = await PartiesService.getOne(id);

      return res.status(200).json(parties);
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
      await PartiesService.delete(id);
      return res.status(200).json({ message: "Delete parties Success" });
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
      await PartiesService.update(body, id);
      return res
        .status(200)
        .json({ message: "Update Parties Success", data: { id: id, ...body } });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }
})();