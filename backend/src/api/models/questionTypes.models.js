const mongoose=require('mongoose');
const {ObjectId} = mongoose.Types();
const questionTypeSchema=new mongoose.Schema({
    name:{type: "string", required: true},
    positive_marks:{ type: "Number", required: true},
    negative_marks:{ type: "Number", required: true},
},
{timestamps:true}
)

module.exports = mongoose.model('QuestionType',questionTypeSchema,questionTypes);