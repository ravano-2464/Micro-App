import { AppDataSource } from "../data-source";
import { Candidate } from "../entity/Candidate";

export default new (class CandidateService {
  repository = AppDataSource.getRepository(Candidate);
  //////////////// CREATE /////////////////
  async create(reqBody: any): Promise<any> {
    try {
      const candidate = this.repository.create({
        candidate_name: reqBody.candidate_name,
        serial_number: reqBody.serial_number,
        vision_mission: reqBody.vision_mission,
        candidate_image: reqBody.candidate_image,
      });

      await this.repository
        .createQueryBuilder()
        .insert()
        .into(Candidate)
        .values(candidate)
        .execute();

      return candidate;
    } catch (error) {
      throw error;
    }
  }

  //////////////// FIND /////////////////
  async find(): Promise<any> {
    try {
      const candidate = await this.repository
        .createQueryBuilder("candidate")
        .getMany();
      return candidate;
    } catch (error) {
      throw error;
    }
  }

  //////////////// GET /////////////////
  async getOne(id: number): Promise<any> {
    try {
      const candidate = await this.repository
        // .findOneBy({ id });
        .createQueryBuilder("candidate")
        .where("candidate.id = :id", { id: id })
        .getOne();
      return candidate;
    } catch (error) {
      throw error;
    }
  }

  //////////////// DELETE /////////////////
  async delete(id: number): Promise<any> {
    try {
      const deleteArticle = await this.repository
        .createQueryBuilder()
        .delete()
        .where("id = :id", { id: id })
        .execute();

      return deleteArticle;
    } catch (error) {
      throw error;
    }
  }

  //////////////// UPDATE /////////////////
  async update(
    body: {
      candidate_name: string;
      serial_number: number;
      vision_mission: string;
      candidate_image: string;
    },
    id: number
  ): Promise<any> {
    try {
      const updateArticle = await this.repository
        .createQueryBuilder()
        .update(Candidate)
        .set({
          candidate_name: body.candidate_name,
          serial_number: body.serial_number,
          vision_mission: body.vision_mission,
          candidate_image: body.candidate_image,
        })
        .where("id = :id", { id: id })
        .execute();

      return updateArticle;
    } catch (error) {
      throw error;
    }
  }
})();
