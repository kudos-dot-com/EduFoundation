const mongoose=require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const questionSchema=new mongoose.Schema({
    question:{ type: "string", required: true},
    chapter:{ type: ObjectId, required: true,ref:"chapters"},
    subject:{ type: ObjectId, required: true,ref:"subjects"},
    // question_type:{ type: ObjectId, required: true,ref:"questionTypes"},
    exam:{ type: ObjectId, required: true,ref:"exams"},
    answers:{ type: "array", required: true},
    correct_answer:{ type: "string", required: true},
    hints:{ type: "string", required: false},
    user:{type:ObjectId, required: false,ref:"users"},
},
{timestamps:true}
)

module.exports = mongoose.model('Question',questionSchema,'questions');