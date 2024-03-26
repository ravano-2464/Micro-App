import Joi from "joi";

export const articleValidator = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().required(),
  content: Joi.string().required(),
  createdDate: Joi.date().required(),
  user_id: Joi.number().required(),
});
