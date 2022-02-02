const Joi = require("joi");

const questionTypeSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    positive_marks: Joi.number().required(),
    negative_marks: Joi.number().required(),
});

module.exports = {
    questionTypeSchema
};
