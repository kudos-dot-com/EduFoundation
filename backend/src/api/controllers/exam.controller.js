const { chapterService } = require('../services/exam.services')
// validator
const { ChapterSchema } =require('../validators/exam.validator')
const {response,incompleteField} = require('../helpers/response')

class chapter{
    async addChapter(req,res){
       try{
        
        // validator
        const result =await ChapterSchema.validateAsync(req.body);
        console.log(result);
        
        const checkChapter = chapterService.checkChapter(req.body);

        const createChapter = chapterService.addChapter(req.body);

        if(createChapter){
            return response(res,createChapter,"success creating new chapter",200); 
        }
        }
        catch(err){
            console.log(err);
            return response(res,"","error while adding exams",403); 
        }
    }
}

const chapterController = new chapter();

module.exports = { chapterController };