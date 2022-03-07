const { chapterService } = require('../services/chapter.sevrice')
// validator
const { ChapterSchema } =require('../validators/chapter.validator')
const {response,incompleteField} = require('../helpers/response')

class chapter{
    async addChapter(req,res){
        // validator
        const result =await ChapterSchema.validateAsync(req.body);
        console.log(result);
        
        const checkChapter = chapterService.checkChapter(req.body);

        const createChapter = chapterService.addChapter(req.body);

        if(createChapter){
            return response(res,createChapter,"success creating new chapter",200); 
        }
    }
}

const chapterController = new chapter();

module.exports = { chapterController };