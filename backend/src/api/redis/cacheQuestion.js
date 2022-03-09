const examModel = require('../models/exams.models')
const chapterModel = require('../models/chapter.model')
const subjectModel = require('../models/subjects.model')
const questionModel = require('../models/questions.model')
// const redisConfig = require('../../config/redisConfig');
// const client = redisConfig();
const redis = require('redis');
const { REDIS_PORT }= require('../../config/config');
console.log(REDIS_PORT)
const client = redis.createClient(REDIS_PORT);
// console.log(client);
class cacheQuestions{
    async addSubject(){
        console.log('hi');
        const getSubjects =await subjectModel.find({})
        // console.log(getSubjects);
        for(let i in getSubjects){
            let subject = getSubjects[i];
            console.log(subject);
            const query = { subject:subject._id }
            const getQuestions = await questionModel.find(query);
            console.log(getQuestions);
            client.set(subject.name,3600,'hi');
        }
    }
}

const cache = new cacheQuestions();
module.exports = cache;