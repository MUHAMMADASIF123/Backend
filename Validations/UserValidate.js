import Joi from "joi";
const validateUser = (data) => {
  const loginSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  return loginSchema.validate(data);
};
export default validateUser;
