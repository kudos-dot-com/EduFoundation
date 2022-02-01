const mongoose=require('mongoose');
const {MONGO_URI}= require('./config');

function DbConnect()
{ 
    mongoose.connect(MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("DataBase Connected"))
    .catch(err => console.log(err));
    
}
module.exports = DbConnect;