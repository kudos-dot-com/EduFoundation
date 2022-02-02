const mongoose=require('mongoose');
const {ObjectId} = mongoose.Types();
const subjectSchema=new mongoose.Schema({
    subject_name:{ type: "string", required: true},
    exam:{}
},
{timestamps:true}
)

module.exports = mongoose.model('Subject',subjectSchema,subjects);