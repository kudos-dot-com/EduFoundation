const mongoose=require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const examSchema=new mongoose.Schema({
    name:{ type: "string", required: true}, 
    type:{ type: "string",required: true}, 
    positive_marks:{ type: "Number", required: true},
    negative_marks:{ type: "Number", required: true}
    // subject:{type:ObjectId, required: true,ref:"subjects"},
    // user:{type:ObjectId, required: false,ref:"users"},
},
{timestamps:true}
)

module.exports = mongoose.model('Exam',examSchema,'exams');