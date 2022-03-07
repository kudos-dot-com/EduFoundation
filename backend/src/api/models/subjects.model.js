const mongoose=require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const subjectSchema=new mongoose.Schema({
    name:{ type: "string", required: true},
},
{timestamps:true}
)

module.exports = mongoose.model('Subject',subjectSchema,'subjects');