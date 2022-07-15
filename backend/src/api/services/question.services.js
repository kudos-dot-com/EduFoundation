const questionModel = require("../models/questions.model");
const chapterModel = require('../models/chapter.model')
const subjectModel = require('../models/subjects.model')
const topicModel = require('../models/topic.model')
const examModel = require('../models/exams.models')
const {response,incompleteField} = require('../helpers/response')
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

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
  async getQuestionSubjectwise(res,subject,{page,limit}){
    try{
     page = parseInt(page);
     limit= parseInt(limit);
 
     const curr = limit*(page-1); 
     const getsubject = await subjectModel.find({name:subject});
     const aggr  = [{
       $match:{subject:getsubject[0]._id},
       },
       {$skip:curr},
       {$limit:limit}
     ];
     const questions = await questionModel.aggregate(aggr);
     await topicModel.populate(questions,{
      path:'topic'
     })
     if(questions){
       console.log(questions);
       return questions
     }
    }
    catch(err){
     console.log(err);
     return response(res, "", "error while fetching question", 500);
     
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
  async getQuestionRandomTopicwise(res,subject,topic,level,{limit}){
    try{
     limit= parseInt(limit);
     const gettopic = await topicModel.find({name:topic});
     const getsubject = await subjectModel.find({name:subject});
     const aggr  = [{
       $match:{topic:gettopic[0]._id,subject:getsubject[0]._id,difficulty:level},
       },
       {$sample:{size:limit}}
     
     ];
     const questions = await questionModel.aggregate(aggr)
 
     if(questions){
       console.log(questions);
       return questions
     }
    }
    catch(err){
     console.log(err);
     return response(res, "", "error while fetching question", 500);
     
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
     return response(res, "", "error while fetching question", 500);
     
    }    
   }
  async addJsonDetails(json,subject,chapter,res){
    const getSubject = await subjectModel.findOne({ name: subject });

    if (!getSubject) {
      return response(res, "", "subject does not exists", 403);
    }

    // const getChapter = await chapterModel.findOne({
    //   name: chapter,
    //   subject: getSubject._id,
    // });

    
    const getTopic = await topicModel.findOne({
      name:chapter,
      subject: getSubject._id,
    });

    if (!getTopic) {
      return response(res, "", "chapter does not exists", 403);
    }
    json['topic'] = getTopic._id
    json['subject'] = getSubject._id
    var answer = [json['correct_answer']]
    json['correct_answer'] = answer;
    delete json.chapter;

    return json;
    

    // if (!getChapter) {
    //   return response(res, "", "chapter does not exists", 403);
    // }

  }
async formatJson(json,subject,res){
  console.log(json,subject)
  var query = []
  for(var i in json){
    var data = json[i]
    var temp =await this.addJsonDetails(data,subject,data.chapter,res)
    json[i] = temp
    console.log(temp)
    query.push({
      updateOne:{ 
        "filter":{question:temp.question},
        "update":{$set:temp},
        upsert:true
        
      }
    })
  }

  const questions = await questionModel.bulkWrite(query,{ordered:false})
  console.log(questions);
  return questions;
  
}
async deleteQuestions(id){
  const question =await questionModel.deleteOne({_id:id})
  return question;
}
}

const questionService = new QuestionService();

module.exports = { questionService };
