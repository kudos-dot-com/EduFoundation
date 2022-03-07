const examModel = require('../models/exams.models')
const {response} = require('../helpers/response')
const createCollection = require('../utils/createDbCollection');

class ExamServices{
    async checkExam(res,{name}){
    try{
        const getExam = await examModel.findOne({name});
        
        console.log(getExam);
        return getExam
    }
    catch(err){
        console.log(err);
        return response(res,"","error while fetching subject",403); 
    }
    }

    async addExam(res,body){
        try{
            
            const newExam = new examModel( body );

            const createExam = await newExam.save();
            
            return createExam;
        }
        catch(err){
            console.log(err);
            return response(res,"","error while fetching subject",403); 
        }
        }
}
const ExamService = new ExamServices();
module.exports = { ExamService };