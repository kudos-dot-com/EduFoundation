const userModel=require('../models/user')
const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../../config/config');
const response = require('../helpers/response')
const verify=(req,res,next)=>{
    const {token} = req.headers;
    if(!token)
    {
        return response(res,"","you must be logged in",403); 
    }
    const token=authorization.replace('Bearer ',"")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err)
        {
            return response(res,"","you must be logged in",403); 
        }
        const {_id}=payload;
        userModel.findById(_id)
        .then(userdata=>{
            req.user=userdata;
            next();
        })
    })
   
}