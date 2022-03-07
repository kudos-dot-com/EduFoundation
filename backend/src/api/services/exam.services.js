const examModel = require('../models/exams.models')
const {response} = require('../helpers/response')
const createCollection = require('../utils/createCollection');

class ExamServices{
    async checkExam(res,{name}){
    try{
        const getExam = await ExamModel.findOne({name});
        
        console.log(getExam);
        if(getExam)
        {
            return response(res,"","exam already exists",403); 
        }
    }
    catch(err){
        console.log(err);
        return response(res,"","error while fetching subject",403); 
    }
    }

    async addExam(res,{name}){
        try{
            
            const newExam = new examModel({
                name
            });

            const createExam = await newExam.save();
            
            return createExam;
        }
        catch(err){
            console.log(err);
            return response(res,"","error while fetching subject",403); 
        }
        }
}
const examService = new ExamServices();
module.exports = { examService };