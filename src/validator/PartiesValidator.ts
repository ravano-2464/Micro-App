import Joi from "joi";

export const partiesValidator = Joi.object({
  parties_name: Joi.string().required(),
  parties_chairman: Joi.string().required(),
  vision_mission: Joi.string().required(),
  parties_address: Joi.string().required(),
  parties_image: Joi.string().required(),
  candidate_id: Joi.number().required(),
});
