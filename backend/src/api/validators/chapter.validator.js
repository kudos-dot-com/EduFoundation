const Joi = require("joi");

const ChapterSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  subject: Joi.string().min(3).max(30).required(),
  topic: Joi.string().min(3).max(30).required(),

  // user: Joi.string().min(3).max(30).required(),
  // exam: Joi.string().min(3).max(30).required(),

});


module.exports = {
    ChapterSchema
};
