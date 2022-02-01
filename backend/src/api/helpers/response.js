
function response(res,result,message,code){
    return res.status(code).json({message,code,result})  
} 
module.exports=response; 
