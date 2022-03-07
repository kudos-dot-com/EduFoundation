const { chapterService } = require('../services/chapter.sevrice')
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
}

const chapterController = new chapter();

module.exports = { chapterController };