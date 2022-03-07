const { ExamService } = require('../services/chapter.sevrice')
// validator
const { ExamSchema } =require('../validators/chapter.validator')
const {response,incompleteField} = require('../helpers/response')

class chapter{
    async addChapter(req,res){
        // validator
       try{
        const result =await ExamSchema.validateAsync(req.body);
        console.log(result);
        
        const checkExam = ExamService.checkExam(req.body);

        const createExam = ExamService.addExam(req.body);

        if(createExam){
            return response(res,createExam,"success creating new exam",200); 
        }
       }
       catch(err){
        console.log(err);
        return response(res,"","error while adding subjects",403); 
       }
    }
}

const chapterController = new chapter();

module.exports = { chapterController };