const {signupService,loginService} =require('../services/auth.services')
// validator
const {SignupSchema,LoginSchema} =require('../validators/user.validator')
const {response,incompleteField} = require('../helpers/response')

class Auth{
    async signup(req,res){
       try{
        const result =await SignupSchema.validateAsync(req.body);
        console.log(result);
        
        const user = await signupService.findUser(res,result);
        if(user){
            return response(res,"","user with same email or username already exists",403); 
        }
        else{
            try{
                const newuser = await signupService.createUser(res,result);
            }
            catch(err){
                console.log(err);
                return response(res,"","error while registering new user",403); 
            }
        }
       }
       catch(err){
            console.log(err);    
            return response(res,"","an error has occured",403);
       }

    }

    async login(req,res,next){

        try{
            const result =await LoginSchema.validateAsync(req.body);
            console.log(result);
               
            const verifyEmail = await loginService.verifyEmail(res,result,next);
            
            if(verifyEmail)
            {
                const Loggeduser = await loginService.compareHash(res,verifyEmail,result);
                if(Loggeduser)
                {
                    const addToken = await loginService.loginUser(res,Loggeduser)
                }
            }
           }
           catch(err){
                console.log(err);    
                return response(res,"","an error has occured",403);
           }
    }
}

const authController = new Auth();
module.exports = authController;