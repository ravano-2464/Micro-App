import { AppDataSource } from "../data-source";
import { Parties } from "../entity/Parties";

export default new (class PartiesServices {
  repository = AppDataSource.getRepository(Parties);
  //////////////// CREATE /////////////////
  async create(reqBody: any): Promise<any> {
    try {
      const parties = this.repository.create({
        parties_name: reqBody.parties_name,
        parties_chairman: reqBody.parties_chairman,
        vision_mission: reqBody.vision_mission,
        parties_address: reqBody.parties_address,
        parties_image: reqBody.parties_image,
        candidate_id: reqBody.candidate_id,
      });

      await this.repository
        .createQueryBuilder("parties")
        .insert()
        .into(Parties)
        .values(parties)
        .execute();

      return parties;
    } catch (error) {
      throw error;
    }
  }

  //////////////// FIND /////////////////
  async find(): Promise<any> {
    try {
      const parties = await this.repository
        .createQueryBuilder("parties")
        .leftJoinAndSelect("parties.candidate", "candidate")
        .getMany();
      return parties;
    } catch (error) {
      throw error;
    }
  }

  //////////////// GET /////////////////
  async getOne(id: number): Promise<any> {
    try {
      const parties = await this.repository
        .createQueryBuilder("parties")
        .leftJoinAndSelect("parties.candidate", "candidate")
        .where("parties.id = :id", { id: id })
        .getOne();
      return parties;
    } catch (error) {
      throw error;
    }
  }

  //////////////// DELETE /////////////////
  async delete(id: number): Promise<any> {
    try {
      const deleteParties = await this.repository
        .createQueryBuilder()
        .delete()
        .where("id = :id", { id: id })
        .execute();

      return deleteParties;
    } catch (error) {
      throw error;
    }
  }

  //////////////// UPDATE /////////////////
  async update(
    body: {
      parties_name: string;
      parties_chairman: string;
      vision_mission: string;
      parties_address: string;
      parties_image: string;
    },
    id: number
  ): Promise<any> {
    try {
      const updateParties = await this.repository
        .createQueryBuilder()
        .update(Parties)
        .set({
          parties_name: body.parties_name,
          parties_chairman: body.parties_chairman,
          vision_mission: body.vision_mission,
          parties_address: body.parties_address,
          parties_image: body.parties_image,
        })
        .where("id = :id", { id: id })
        .execute();

      return updateParties;
    } catch (error) {
      throw error;
    }
  }
})();