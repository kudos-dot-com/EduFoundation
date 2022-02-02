const questionService = require('../services/question.services');
const questionValidator = require('../validators/question.validator');
const {response,incompleteField} = require('../helpers/response')


class Question
{
    async addQuestion(req,res)
    {
      try{
        const verifyUser = await questionService.checkUser(req.user);
        if(!verifyUser)
        {
            return response(res,"","your are not authorised",403); 
        }

        const result = await questionValidator.validateAsync(req.body);
        console.log(result);
        if(!result){
            incompleteField(res);
        }

        const question = await questionService.addQuestion(req.body);
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

const questionController=new Question();
module.exports=questionController;
