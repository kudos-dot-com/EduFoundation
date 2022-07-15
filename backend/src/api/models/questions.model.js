const mongoose=require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const questionSchema=new mongoose.Schema({
    question:{ type: "string", required: false,default:""},
    questionImage:{ type: "string", required: false,default:""},
    chapter:{ type: ObjectId, required: false,ref:"chapters"},
    topic:{ type: ObjectId, required: true,ref:"topics"},
    subject:{ type: ObjectId, required: true,ref:"subjects"},
    // question_type:{ type: ObjectId, required: true,ref:"questionTypes"},
    exam:{ type: "string", required: false,default:"customized"},
    option1:{ type: "string", required: false,default:""},
    option2:{ type: "string", required: false,default:""},
    option3:{ type: "string", required: false,default:""},
    option4:{ type: "string", required: false,default:""},
    option1Image:{ type: "string", required: false,default:""},
    option2Image:{ type: "string", required: false,default:""},
    option3Image:{ type: "string", required: false,default:""},
    option4Image:{ type: "string", required: false,default:""},
    correct_answer:{ type: "array", required: true},
    hints1:{ type: "string", required: false},
    hints2:{ type: "string", required: false},
    difficulty:{ type: "string", required: false},
    year:{ type: "string", required: false},
    user:{type:ObjectId, required: false,ref:"users"},
},
{timestamps:true}
)

module.exports = mongoose.model('Question',questionSchema,'questions');
