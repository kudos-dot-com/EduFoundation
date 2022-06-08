const Joi = require("joi");

const ChapterSchema = Joi.object({
  name: Joi.string().min(3).max(130).required(),
  subject: Joi.string().min(3).max(130).required(),
  topic: Joi.string().min(3).max(130).required(),

  // user: Joi.string().min(3).max(30).required(),
  // exam: Joi.string().min(3).max(30).required(),

});


module.exports = {
    ChapterSchema
};
