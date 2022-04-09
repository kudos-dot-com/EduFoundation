const mongoose=require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const questionSchema=new mongoose.Schema({
    question:{ type: "string", required: true},
    chapter:{ type: ObjectId, required: true,ref:"chapters"},
    subject:{ type: ObjectId, required: true,ref:"subjects"},
    // question_type:{ type: ObjectId, required: true,ref:"questionTypes"},
    exam:{ type: ObjectId, required: false,ref:"exams"},
    option1:{ type: "string", required: true},
    option2:{ type: "string", required: true},
    option3:{ type: "string", required: true},
    option4:{ type: "string", required: true},
    correct_answer:{ type: "string", required: true},
    hints:{ type: "string", required: false},
    user:{type:ObjectId, required: false,ref:"users"},
},
{timestamps:true}
)

module.exports = mongoose.model('Question',questionSchema,'questions');
