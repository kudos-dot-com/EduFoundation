const Joi = require("joi");

const QuestionSchema = Joi.object({
    question: Joi.string().min(3).max(5000).required(),
    chapter: Joi.string().min(3).max(30).required(),
    subject: Joi.string().min(3).max(30).required(),
    option1:Joi.string().min(1).max(300).required(),
    option2:Joi.string().min(1).max(300).required(),
    option3:Joi.string().min(1).max(300).required(),
    option4:Joi.string().min(1).max(300).required(),
    correct_answer: Joi.string().min(3).max(30).required(),
    hints: Joi.string().min(3).max(30),
    // user: Joi.string().min(3).max(30).required(),

});



module.exports = {
  QuestionSchema
};
