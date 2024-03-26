import { AppDataSource } from "../data-source";
import { Vote } from "../entity/Vote";

export default new (class VoteService {
  repository = AppDataSource.getRepository(Vote);
  //////////////// CREATE /////////////////
  async create(reqBody: any): Promise<any> {
    try {
      const vote = this.repository.create({
        candidate_id: reqBody.candidate_id,
        user_id: reqBody.user_id,
      });

      await this.repository
        .createQueryBuilder()
        .insert()
        .into(Vote)
        .values(vote)
        .execute();

      return vote;
    } catch (error) {
      throw error;
    }
  }

  //////////////// FIND /////////////////
  async find(): Promise<any> {
    try {
      const vote = await this.repository
        .createQueryBuilder("vote")
        .leftJoinAndSelect("vote.user", "user")
        .leftJoinAndSelect("vote.candidate", "candidate")
        .getMany();
      return vote;
    } catch (error) {
      throw error;
    }
  }

  //////////////// GET /////////////////
  async getOne(id: number): Promise<any> {
    try {
      const vote = await this.repository
        .createQueryBuilder("vote")
        .leftJoinAndSelect("vote.user", "user")
        .leftJoinAndSelect("vote.candidate", "candidate")
        .where("vote.id = :id", { id: id })
        .getOne();
      return vote;
    } catch (error) {
      throw error;
    }
  }

  //////////////// DELETE /////////////////
  async delete(id: number): Promise<any> {
    try {
      const deleteVote = await this.repository
        .createQueryBuilder()
        .leftJoinAndSelect("vote.user", "user")
        .leftJoinAndSelect("vote.candidate", "candidate")
        .delete()
        .where("id = :id", { id: id })
        .execute();

      return deleteVote;
    } catch (error) {
      throw error;
    }
  }

  //////////////// UPDATE /////////////////
  async update(
    body: {
      candidate_id: number;
      user_id: number;
    },
    id: number
  ): Promise<any> {
    try {
      const updateArticle = await this.repository
        .createQueryBuilder()
        .update(Vote)
        .set({
          candidate_id: body.candidate_id,
          user_id: body.user_id,
        })
        .where("id = :id", { id: id })
        .execute();

      return updateArticle;
    } catch (error) {
      throw error;
    }
  }
})();
