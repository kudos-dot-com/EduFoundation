const {questionService }= require('../services/question.services');
const {QuestionSchema} = require('../validators/question.validator');
const {response,incompleteField} = require('../helpers/response')
const examModel = require('../models/exams.models')
const chapterModel = require('../models/chapter.model')
const subjectModel = require('../models/subjects.model')


class Test
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
            return response(res,question,"added question successfully",403);        
        }
      }
      catch(err)
      {
        console.log(err);
        return response(res,"","some error has occured",403); 
      }
        
        
    }
    
}

const testController=new Test();
module.exports = testController;
