const { chapterService } = require('../services/chapter.services')
// validator
const { ChapterSchema } =require('../validators/chapter.validator')
const {response,incompleteField} = require('../helpers/response')

class chapter{
    async addChapter(req,res){
       try{
        // validator
        const result =await ChapterSchema.validateAsync(req.body);
        console.log(result);
        
        const checkChapter = await chapterService.checkChapter(res,req.body);
        
        if(checkChapter)
        {
            return response(res,"","chapter already exists",403); 
        }

        const createChapter = await chapterService.addChapter(res,req.body);

       

        if(createChapter){
            return response(res,createChapter,"success creating new chapter",200); 
        }
       }
       catch(err){
        console.log(err);
        return response(res,"","error while adding exams",403); 
       }
    }
    async getChapter(req,res){
    
        const { subject } = req.params;
        const question = await chapterService.getQuestionChapterwise(res,subject,req.query);
        
        return response(res,question,"fetched question successfully",403);        
        
      }
      async getChapterTopicwise(req,res){
    
        const { subject } = req.params;
        const question = await chapterService.getChapterTopicwise(res,subject,req.query);
        
        return response(res,question,"fetched topicwise chapters successfully",403);        
        
      }
}

const chapterController = new chapter();

module.exports = { chapterController };