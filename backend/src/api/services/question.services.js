const questionModel = require("../models/questions.model");
const chapterModel = require('../models/chapter.model')
const subjectModel = require('../models/subjects.model')
const topicModel = require('../models/topic.model')
const examModel = require('../models/exams.models')
const {response,incompleteField} = require('../helpers/response')

class QuestionService {
  async checkUser(user) {
    return user.user_type == "teacher" || user.user_type == "admin";
  }
  async addQuestion(res,getSubject,getChapter,getTopic,fields) {
    try{
      const { chapter,subject,exam } = fields;
      var arr = [""] 
      const newquestion = new questionModel({
        ...fields,
        subject:getSubject._id,
        chapter:getChapter._id,
        topic:getTopic._id,
      })
      const question = await newquestion.save();
      return question;

    } catch (err) {
      console.log(err);
      return response(res, "", "error while registering new question", 403);
    }
  }
  async getQuestionChapterwise(res,subject,chapter,{page,limit}){
   try{
    page = parseInt(page);
    limit= parseInt(limit);

    const curr = limit*(page-1); 
    const getchapter = await chapterModel.find({name:chapter});
    const getsubject = await subjectModel.find({name:subject});
    console.log(getsubject,getchapter)
    const aggr  = [{
      $match:{chapter:getchapter[0]._id,subject:getsubject[0]._id},
      },
      {$skip:curr},
      {$limit:limit}
    ];
    const questions = await questionModel.aggregate(aggr)

    if(questions){
      console.log(questions);
      return questions
    }
   }
   catch(err){
    console.log(err);
    return response(res, "", "error while fetching question", 403);
    
   }    
  }
  async getQuestionExamwise(res,exam,{sample}){
    try{
     sample = parseInt(sample);
     const getExam = await examModel.find({name:exam});
     const aggr  = [{
       $match:{exam:getExam[0]._id},
       },
       {$sample:{size:sample}}
     ];
     const questions = await questionModel.aggregate(aggr)
 
     if(questions){
       console.log(questions);
       return questions
     }
    }
    catch(err){
     console.log(err);
     return response(res, "", "error while fetching question", 403);
     
    }
     
     
  }
  async getQuestionTopicwise(res,subject,topic,level,{page,limit}){
    try{
     page = parseInt(page);
     limit= parseInt(limit);
 
     const curr = limit*(page-1); 
     const gettopic = await topicModel.find({name:topic});
     const getsubject = await subjectModel.find({name:subject});
    //  console.log(getsubject,getchapter)
     const aggr  = [{
       $match:{topic:gettopic[0]._id,subject:getsubject[0]._id,difficulty:level},
       },
       {$skip:curr},
       {$limit:limit}
     ];
     const questions = await questionModel.aggregate(aggr)
 
     if(questions){
       console.log(questions);
       return questions
     }
    }
    catch(err){
     console.log(err);
     return response(res, "", "error while fetching question", 403);
     
    }    
   }
}

const questionService = new QuestionService();

module.exports = { questionService };
