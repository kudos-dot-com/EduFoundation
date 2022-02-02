const Joi = require("joi");

const SubjectSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
});

module.exports = {
  SubjectSchema
};
