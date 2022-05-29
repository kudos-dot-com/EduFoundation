const { topicService } = require('../services/topic.services')
// validator
const { topicSchema } =require('../validators/topic.validator')
const {response,incompleteField} = require('../helpers/response')

class topic{
    async addtopic(req,res){
       try{
        // validator
        const result =await topicSchema.validateAsync(req.body);
        console.log(result);
        
        const checktopic = await topicService.checktopic(res,req.body);
        
        if(checktopic)
        {
            return response(res,"","topic already exists",403); 
        }

        const createtopic = await topicService.addtopic(res,req.body);

       

        if(createtopic){
            return response(res,createtopic,"success creating new topic",200); 
        }
       }
       catch(err){
        console.log(err);
        return response(res,"","error while adding exams",403); 
       }
    }
    async gettopic(req,res){
    
        const { subject } = req.params;
        const question = await topicService.getQuestiontopicwise(res,subject,req.query);
        
        return response(res,question,"fetched question successfully",403);        
        
      }
}

const topicController = new topic();

module.exports = { topicController };