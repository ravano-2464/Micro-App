import { AppDataSource } from "../data-source";
import { Article } from "../entity/Article";

export default new (class ArticleService {
  //////////////// CREATE /////////////////
  async create(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(Article);

      const article = repository.create({
        title: reqBody.title,
        image: reqBody.image,
        content: reqBody.content,
        createdDate: reqBody.createdDate,
      });

      await AppDataSource.getRepository(Article)
        .createQueryBuilder()
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
      const article = await AppDataSource.getRepository(Article)
        .createQueryBuilder("article")
        .getMany();
      return article;
    } catch (error) {
      throw error;
    }
  }

  //////////////// DELETE /////////////////
  async delete(id: number): Promise<any> {
    try {
      const deleteArticle = await AppDataSource.getRepository(Article)
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
    },
    id: number
  ): Promise<any> {
    try {
      const updateArticle = await AppDataSource.createQueryBuilder()
        .update(Article)
        .set({
          title: body.title,
          image: body.image,
          content: body.content,
          createdDate: body.createdDate,
        })
        .where("id = :id", { id: id })
        .execute();

      return updateArticle;
    } catch (error) {
      throw error;
    }
  }
})();
