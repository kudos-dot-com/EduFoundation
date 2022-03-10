const chapterModel = require('../models/chapter.model')
const subjectModel = require('../models/subjects.model')
const {response} = require('../helpers/response')
const createCollection = require('../utils/createDbCollection');

class chapterServices{
    async checkChapter(res,{name,subject}){
    try{
        const getSubject = await subjectModel.findOne({name:subject});
        if(!getSubject){
            return response(res,"","subject does not exists",403); 
        }
        const getChapter = await chapterModel.findOne({name,subject:getSubject._id});
        
        console.log(getChapter);
        
        return getChapter;
    }
    catch(err){
        console.log(err);
        return response(res,"","error while fetching subject",403); 
    }
    }

    async addChapter(res,{name,subject}){
        try{
            const getSubject = await subjectModel.findOne({name:subject});
            console.log(getSubject);
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
        async getQuestionChapterwise(res,subject){
            try{
             
             const getchapter = await chapterModel.find({subject});
         
             if(getchapter){
               console.log(getchapter);
               return getchapter
             }
            }
            catch(err){
             console.log(err);
             return response(res, "", "error while fetching question", 403);
             
            }
             
             
           }
}
const chapterService = new chapterServices();
module.exports = {chapterService};