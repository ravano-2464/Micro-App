// Controllers for logical system application

import { Request, Response } from "express";
import UserServices from "../services/UserServices";

export default new (class UserControllers {
  ///////////////// CREATE /////////////////
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const user = await UserServices.create(data);

      return res.status(201).json(user);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

  ///////////////// FIND /////////////////
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const user = await UserServices.find();

      return res.status(200).json(user);
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
      await UserServices.delete(id);
      return res.status(200).json({ message: "Delete User Success" });
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
      await UserServices.update(body, id);
      return res
        .status(200)
        .json({ message: "Update User Success", data: { id: id, ...body } });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }
})();
