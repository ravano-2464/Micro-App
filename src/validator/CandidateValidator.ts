import Joi from "joi";

export const candidateValidator = Joi.object({
  candidate_name: Joi.string().required(),
  serial_number: Joi.number().required(),
  vision_mission: Joi.string().required(),
  candidate_image: Joi.string().required(),
});
