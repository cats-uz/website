const Joi = require("joi");
const userValidator = (body) => {
  const validator = Joi.object({
    name: Joi.string().required().min(1),
    username: Joi.string().required().min(3),
    password: Joi.string().required().min(8),
  });
  return validator.validate(body);
};

module.exports = {
  userValidator,
};
