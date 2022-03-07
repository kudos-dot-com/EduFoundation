const { subjectService } =require('../services/subject.services')
// validator
const { SubjectSchema } =require('../validators/subject.validator')
const {response,incompleteField} = require('../helpers/response')

class Subject{
    async addSubject(req,res){
       try{
        // validator
        const result =await SubjectSchema.validateAsync(req.body);
        console.log(result);

        const findSubject = await subjectService.findSubject(res,req.body);
        if(findSubject){
            return response(res,"","subject already exists",403);
        }
        // validating the collection name 
        const subjectname = await subjectService.validateCollectionName(req.body);
 
        const createSubject = await subjectService.createSubject(res,subjectname);
        
        if(createSubject){
            return response(res,createSubject,"success creating new subject",200); 
        }

       }
       catch(err){
            console.log(err);    
            return response(res,"","an error has occured",403);
       }
    }

}

const subjectController = new Subject();
module.exports = subjectController;