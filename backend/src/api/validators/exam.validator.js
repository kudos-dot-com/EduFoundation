const Joi = require("joi");

const ExamSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    type: Joi.string().min(3).max(30).required(),
    positive_marks: Joi.number().greater(1).required(),
    negative_marks: Joi.number().required(),
    // subject: Joi.string().min(3).max(30).required(),
    // user: Joi.string().min(3).max(30).required(),
});



module.exports = {
  ExamSchema
};
