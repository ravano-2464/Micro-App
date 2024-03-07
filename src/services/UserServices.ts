// service for logic when app comunication to database

import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export default new (class UserService {
  //////////////// CREATE /////////////////
  async create(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(User);

      const user = repository.create({
        fullname: reqBody.username,
        alamat: reqBody.alamat,
        jenis_kelamin: reqBody.jenis_kelamin,
        username: reqBody.username,
        password: reqBody.password,
        role: reqBody.role,
      });

      await AppDataSource.getRepository(User)
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
      const user = await AppDataSource.getRepository(User)
        .createQueryBuilder("user")
        .getMany();
      return user;
    } catch (error) {
      throw error;
    }
  }

  //////////////// DELETE /////////////////
  async delete(id: number): Promise<any> {
    try {
      const deleteUser = await AppDataSource.getRepository(User)
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
      alamat: string;
      jenis_kelamin: string;
      username: any;
      password: any;
      role: string;
    },
    id: number
  ): Promise<any> {
    try {
      const updateUser = await AppDataSource.createQueryBuilder()
        .update(User)
        .set({
          fullname: body.fullname,
          alamat: body.alamat,
          jenis_kelamin: body.jenis_kelamin,
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
