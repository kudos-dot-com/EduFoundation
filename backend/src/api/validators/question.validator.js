const Joi = require("joi");

const QuestionSchema = Joi.object({
    question: Joi.string().min(3).max(30).required(),
    chapter: Joi.string().min(3).max(30).required(),
    subject: Joi.string().min(3).max(30).required(),
    question_type: Joi.string().min(3).max(30).required(),
    exam: Joi.string().min(3).max(30).required(),
    answers: Joi.array().items(Joi.string().required()).required(),
    correct_answer: Joi.string().min(3).max(30).required(),
    hints: Joi.string().min(3).max(30),
    user: Joi.string().min(3).max(30).required(),

});



module.exports = {
  QuestionSchema
};
