import Joi from "joi";

export const voteValidator = Joi.object({
  candidate_id: Joi.number().required(),
  user_id: Joi.number().required(),
});
