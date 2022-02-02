const questionModel = require("../models/questions.model");

class QuestionService {
  async checkUser(user) {
    return user.user_type == "teacher" || user.user_type == "admin";
  }
  async addQuestion(fields) {
    try {
      const question = await questionModel.save(fields);
      return question;
    } catch (err) {
      console.log(err);
      return response(res, "", "error while registering new question", 403);
    }
  }
}

const questionService = new QuestionService();

module.exports = { questionService };
