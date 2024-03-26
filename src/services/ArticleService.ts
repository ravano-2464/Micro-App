import { AppDataSource } from "../data-source";
import { Article } from "../entity/Article";

export default new (class ArticleService {
  repository = AppDataSource.getRepository(Article);
  //////////////// CREATE /////////////////
  async create(reqBody: any): Promise<any> {
    try {
      const article = this.repository.create({
        title: reqBody.title,
        image: reqBody.image,
        content: reqBody.content,
        createdDate: reqBody.createdDate,
        user_id: reqBody.user_id,
      });

      await this.repository
        .createQueryBuilder("article")
        .insert()
        .into(Article)
        .values(article)
        .execute();

      return Article;
    } catch (error) {
      throw error;
    }
  }

  //////////////// FIND /////////////////
  async find(): Promise<any> {
    try {
      const article = await this.repository
        .createQueryBuilder("article")
        .leftJoinAndSelect("article.user", "user")
        .getMany();
      return article;
    } catch (error) {
      throw error;
    }
  }

  //////////////// GET /////////////////
  async getOne(id: number): Promise<any> {
    try {
      const article = await this.repository
        // .findOneBy({ id });
        .createQueryBuilder("article")
        .leftJoinAndSelect("article.user", "user")
        .where("article.id = :id", { id: id })
        .getOne();
      return article;
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
      title: string;
      image: string;
      content: string;
      createdDate: Date;
      user_id: number;
    },
    id: number
  ): Promise<any> {
    try {
      const updateArticle = await this.repository
        .createQueryBuilder()
        .update(Article)
        .set({
          title: body.title,
          image: body.image,
          content: body.content,
          createdDate: body.createdDate,
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