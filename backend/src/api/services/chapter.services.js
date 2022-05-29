const chapterModel = require('../models/chapter.model')
const subjectModel = require('../models/subjects.model')
const topicModel = require('../models/topic.model')
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

    async addChapter(res,{name,subject,topic}){
        try{
            const getSubject = await subjectModel.findOne({name:subject});
            const getTopic = await topicModel.findOne({name:topic});
            console.log(getSubject,getTopic);
            const newChapter = new chapterModel({
                name,
                subject:getSubject._id,
                topic:getTopic._id

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
            // console.log(typeof(subject));
            try{
            const getSubject = await subjectModel.findOne({name:subject}); 
            const getchapter = await chapterModel.find({subject:getSubject._id}).populate("topic");
             
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
        async getChapterTopicwise(res,subject){
            // console.log(typeof(subject));
            try{
            let data=[]
            const getSubject = await subjectModel.findOne({name:subject}); 
            const getchapter = await chapterModel.find({subject:getSubject._id}).populate("topic");
            const gettopic = await topicModel.find({subject:getSubject._id})
             
            if(getchapter){
            //    console.log(getchapter);
               for(let i in gettopic)
               {
                   let topics=gettopic[i]
                   let obj={}
                   obj['topic'] = topics.name;
                   console.log(topics)
                   let result = getchapter.filter((dets,idx)=>{
                  
                         return (dets.topic && ((dets.topic._id).toString() === (topics._id).toString()))   
                   
                   })
                   console.log(result)
                   obj['chapters'] = result

                   data.push(obj);

               }
               return data;
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