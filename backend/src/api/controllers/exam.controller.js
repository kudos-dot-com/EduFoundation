const { ExamService } = require('../services/exam.services')
// validator
const { ExamSchema } =require('../validators/exam.validator')
const {response,incompleteField} = require('../helpers/response')

class exam{
    async addExam(req,res){
        // validator
       try{
        const result =await ExamSchema.validateAsync(req.body);
        console.log(result);
        
        const checkExam =await ExamService.checkExam(res,req.body);

        if(checkExam)
        {
            return response(res,"","exam already exists",403); 
        }
        
        const createExam =await ExamService.addExam(res,req.body);

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

const examController = new exam();

module.exports = { examController };