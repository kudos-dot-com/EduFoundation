const mongoose=require('mongoose');
const {ObjectId} = mongoose.Types();
const examSchema=new mongoose.Schema({
    name:{ type: "string", required: true}, 
    subject:{type:ObjectId, required: true,ref:"subjects"},
    user:{type:ObjectId, required: false,ref:"users"},
    exam:{ type: ObjectId, required: true,ref:"exams"},
},
{timestamps:true}
)

module.exports = mongoose.model('Chapter',examSchema,chapters);