// service for logic when app comunication to database

import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export default new (class UserService {
  repository = AppDataSource.getRepository(User);
  //////////////// CREATE /////////////////
  async create(reqBody: any): Promise<any> {
    try {
      const user = this.repository.create({
        fullname: reqBody.fullname,
        address: reqBody.address,
        gender: reqBody.gender,
        username: reqBody.username,
        password: reqBody.password,
        role: reqBody.role,
      });

      await this.repository
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(user)
        .execute();

      return user;
    } catch (error) {
      throw error;
    }
  }

  //////////////// FIND /////////////////
  async find(): Promise<any> {
    try {
      const user = await this.repository.createQueryBuilder("user").getMany();
      return user;
    } catch (error) {
      throw error;
    }
  }

  //////////////// GET /////////////////
  async getOne(id: number): Promise<any> {
    try {
      const user = await this.repository
        .createQueryBuilder("user")
        .where("parties.id = :id", { id: id })
        .getOne();
      return user;
    } catch (error) {
      throw error;
    }
  }

  //////////////// DELETE /////////////////
  async delete(id: number): Promise<any> {
    try {
      const deleteUser = await this.repository
        .createQueryBuilder()
        .delete()
        .where("id = :id", { id: id })
        .execute();

      return deleteUser;
    } catch (error) {
      throw error;
    }
  }

  //////////////// UPDATE /////////////////
  async update(
    body: {
      fullname: string;
      address: string;
      gender: any;
      username: any;
      password: any;
      role: any;
    },
    id: number
  ): Promise<any> {
    try {
      const updateUser = await this.repository
        .createQueryBuilder()
        .update(User)
        .set({
          fullname: body.fullname,
          address: body.address,
          gender: body.gender,
          username: body.username,
          password: body.password,
          role: body.role,
        })
        .where("id = :id", { id: id })
        .execute();

      return updateUser;
    } catch (error) {
      throw error;
    }
  }
})();