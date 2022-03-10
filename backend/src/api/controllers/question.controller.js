const {questionService }= require('../services/question.services');
const {QuestionSchema} = require('../validators/question.validator');
const {response,incompleteField} = require('../helpers/response')
const examModel = require('../models/exams.models')
const chapterModel = require('../models/chapter.model')
const subjectModel = require('../models/subjects.model')
const cache = require('../redis/cacheQuestion')
const getcache = require('../redis/getcachedQuestion')

class Question
{
    async addQuestion(req,res)
    {
      try{
        const result = await QuestionSchema.validateAsync(req.body);
        console.log(result);

        // sanitizing the code
        const { chapter,subject,exam } = req.body;

        const getSubject = await subjectModel.findOne({name:subject});
        
        if(!getSubject){
          return response(res,"","subject does not exists",403); 
        }
  
        const getChapter = await chapterModel.findOne({name:chapter,subject:getSubject._id});
        
        if(!getChapter){
          return response(res,"","chapter does not exists",403); 
        }

        const getExam = await examModel.findOne({name:exam});
        
        if(!getExam){
          return response(res,"","exam does not exists",403); 
        }

        const question = await questionService.addQuestion(res,getSubject,getChapter,getExam,req.body);
        if(question)
        {   
            await cache.addSubject(getSubject.name,question);
            return response(res,question,"added question successfully",403);        
        }
      }
      catch(err)
      {
        console.log(err);
        return response(res,"","some error has occured",403); 
      }
        
        
    }
    async getQuestion(req,res){
    
      const {subject} = req.params;
      const getCache =  await getcache.getSubjectQuestion(subject);
      return response(res,getCache,"success fetching all subject",200);   
    }
    async getQuestionChapterwise(req,res){
    
      const {subject,chapter} = req.params;
      const question = await questionService.getQuestionChapterwise(res,subject,chapter,req.query);
      
      return response(res,question,"fetched question successfully",403);        
      
    }
    async getQuestionExamwise(req,res){
    
      const { exam } = req.params;
      const question = await questionService.getQuestionExamwise(res,exam,req.query);
      
      return response(res,question,"fetched question successfully",403);        
      
    }
    
}

const questionController=new Question();
module.exports=questionController;
