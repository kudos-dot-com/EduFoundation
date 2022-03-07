const { chapterService } = require('../services/chapter.sevrice')
// validator
const { SubjectSchema } =require('../validators/subject.validator')
const {response,incompleteField} = require('../helpers/response')

class chapter{
    async addChapter(req,res){
        const checkChapter = chapterService.checkChapter(req.body);
        
        const createChapter = chapterService.addChapter(req.body);

        if(checkChapter){
            return response(res,createChapter,"success creating new chapter",200); 
        }
    }
}