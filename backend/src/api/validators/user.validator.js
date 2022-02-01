const Joi = require("joi");

const SignupSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  birth_year: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string(),
  verified: Joi.boolean().default(false),
  user_type: Joi.string(),
  highest_degree_of_education: Joi.string(),
});

const LoginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().min(6).pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

module.exports = {
  SignupSchema,
  LoginSchema,
};
