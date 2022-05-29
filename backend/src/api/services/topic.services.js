const topicModel = require('../models/topic.model')
const subjectModel = require('../models/subjects.model')
const {response} = require('../helpers/response')
const createCollection = require('../utils/createDbCollection');

class topicServices{
    async checktopic(res,{name,subject}){
    try{
        const getSubject = await subjectModel.findOne({name:subject});
        if(!getSubject){
            return response(res,"","subject does not exists",403); 
        }
        const gettopic = await topicModel.findOne({name,subject:getSubject._id});
        
        console.log(gettopic);
        
        return gettopic;
    }
    catch(err){
        console.log(err);
        return response(res,"","error while fetching subject",403); 
    }
    }

    async addtopic(res,{name,subject}){
        try{
            const getSubject = await subjectModel.findOne({name:subject});
            console.log(getSubject);
            const newtopic = new topicModel({
                name,
                subject:getSubject._id
            });

            const createtopic = await newtopic.save();
            
            return createtopic;
        }
        catch(err){
            console.log(err);
            return response(res,"","error while fetching subject",403); 
        }
        }
        async getQuestiontopicwise(res,subject){
            // console.log(typeof(subject));
            try{
            const getSubject = await subjectModel.findOne({name:subject});
             
            const gettopic = await topicModel.find({subject:getSubject._id});
         
             if(gettopic){
               console.log(gettopic);
               return gettopic
             }
            }
            catch(err){
             console.log(err);
             return response(res, "", "error while fetching question", 403);
             
            }
             
             
           }
}
const topicService = new topicServices();
module.exports = {topicService};