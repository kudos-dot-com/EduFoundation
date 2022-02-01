const {signupService,loginService} =require('../services/auth.services')
const {SignupSchema,LoginSchema} =require('../validators/user.validator')
const response = require('../helpers/response')

class Auth{
    async signup(req,res){
       try{
        const result =await SignupSchema.validateAsync(req.body);
        console.log(result);
       }
       catch(err){
            return response(res,"","an error has occured",403);
           console.log(err);
       }

    }

    async login(req,res){}
}

const authController = new Auth();
module.exports = authController;