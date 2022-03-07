const subjectModel = require('../models/subjects.model')
const {response} = require('../helpers/response')
const createCollection = require('../utils/createDbCollection');

class SubjectService
{
    async findSubject(res,{name})
    {
        try{
            const subject = await subjectModel.findOne({name})
            console.log(subject);
            return subject;
        }
        catch(err){
            console.log(err);
            return response(res,"","error while finding subject",403); 
        }
    }
    async validateCollectionName({name}){
        name = name.toLowerCase();
        
        if(name.endsWith('s')){
            return name
        }
        else{
            name += 's';
            return name
        }
    }
    async createSubject(res,name)
    {
        try{
            createCollection(name);

            const newSubject = new subjectModel({name})
            const createSubject = await newSubject.save()

            return createSubject;
        }
        catch(err){
            console.log(err);
            return response(res,"","error while creating subject",403); 
        }
    }
   
}
const subjectService = new SubjectService();


module.exports ={
    subjectService
}   