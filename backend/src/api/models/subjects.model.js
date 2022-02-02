const mongoose=require('mongoose');
const {ObjectId} = mongoose.Types();
const subjectSchema=new mongoose.Schema({
    name:{ type: "string", required: true},
},
{timestamps:true}
)

module.exports = mongoose.model('Subject',subjectSchema,subjects);