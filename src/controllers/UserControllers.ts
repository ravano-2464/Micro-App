// Controllers for logical system application

import { Request, Response } from "express";
import UserServices from "../services/UserServices";
import { userValidator } from "../validator/UserValidator";

export default new (class UserControllers {
  ///////////////// CREATE /////////////////
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const { error, value } = userValidator.validate(data);

      if (error)
        return res.status(400).json({ message: error.details[0].message });

      const user = await UserServices.create(value);

      return res
        .status(201)
        .json({ message: "Create Data User Success", user });
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

  ///////////////// GET /////////////////
  async getOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const user = await UserServices.getOne(id);

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