const questionModel = require("../models/questions.model");
const {response,incompleteField} = require('../helpers/response')

class QuestionService {
  async checkUser(user) {
    return user.user_type == "teacher" || user.user_type == "admin";
  }
  async addQuestion(res,getSubject,getChapter,getExam,fields) {
    try{
      const { chapter,subject,exam } = fields;

      const newquestion = new questionModel({
        ...fields,
        subject:getSubject._id,
        chapter:getChapter._id,
        exam:getExam._id,
      })
      const question = await questionModel.save(newquestion);
      return question;

    } catch (err) {
      console.log(err);
      return response(res, "", "error while registering new question", 403);
    }
  }
}

const questionService = new QuestionService();

module.exports = { questionService };
