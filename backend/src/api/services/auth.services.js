const userModel = require('../models/users')
const {response} = require('../helpers/response')
const bcrypt= require('bcryptjs');
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../../config/config')

class SignupService
{
    async findUser(res,{email,username})
    {
        try{
            const user = await userModel.findOne({email,username})
            console.log(user);
            return user;
        }
        catch(err){
            console.log(err);
            return response(res,"","error while registering new user",403); 
        }
    }
    async createUser(res,result)
    {   console.log(result);
        const { password } = result;
        try{
            bcrypt.hash(password,12)
            .then(async hashed=>{
            const user=new userModel({
                ...result,
                password:hashed
            })
        const newUser = await user.save();
        return response(res,newUser,"success creating new user",200); 
        })}
        catch(err){
            console.log(err);
            return response(res,"","error while registering new user",403); 
        }
    }
}
const signupService = new SignupService();

class LoginService{
    async verifyEmail(res,result,next)
    {
        const {email} = result;
        const verify = userModel.findOne({email});
        if(verify)
        {
            return verify
        }
        else{
            return response(res,"","invalid email",403); 
        }
    }
    async compareHash(res,verifyEmail,result)
    { 
        const { password } = result;
        const status =  await bcrypt.compare(password,verifyEmail.password);
        if(status)
        {
            // await loginUser(verifyEmail)
            return verifyEmail;
        }
        else{
            return response(res,"","invalid password",403); 
        }
    }
    async loginUser(res,user)
    {
        const token=jwt.sign({_id:user._id},JWT_SECRET)
        const data={token:token,user};
        
        return response(res,data,"successfully logged in",200); 
    }
}
const loginService= new LoginService();

module.exports ={
    signupService,
    loginService
}