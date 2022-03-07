const chapterModel = require('../models/subjects.model')
const subjectModel = require('../models/subjects.model')
const {response} = require('../helpers/response')
const createCollection = require('../utils/createCollection');

class chapterServices{
    async checkChapter(res,{name,subject}){
    try{
        const getSubject = await subjectModel.findOne({name:subject});
        const getChapter = await chapterModel.findOne({name,subject:getSubject._id});
        
        console.log(getChapter);
        if(getChapter)
        {
            return response(res,"","chapter already exists",403); 
        }
    }
    catch(err){
        console.log(err);
        return response(res,"","error while fetching subject",403); 
    }
    }

    async addChapter(res,{name,subject}){
        try{
            const getSubject = await subjectModel.findOne({name:subject});
            
            const newChapter = new chapterModel({
                name,
                subject:getSubject._id
            });

            const createChapter = await newChapter.save();
            
            return createChapter;
        }
        catch(err){
            console.log(err);
            return response(res,"","error while fetching subject",403); 
        }
        }
}
const chapterService = new chapterServices();
module.exports = {chapterService};