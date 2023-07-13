const Joi = require("joi");
const userValidator = (body, type) => {
  const registerBody = Joi.object({
    name: Joi.string().required().min(1),
    username: Joi.string().required().min(3),
    password: Joi.string().required().min(8),
  });
  const loginBody = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
  })
  const validator = type === "login" ? loginBody : registerBody
  return validator.validate(body);
};

module.exports = {
  userValidator,
};
