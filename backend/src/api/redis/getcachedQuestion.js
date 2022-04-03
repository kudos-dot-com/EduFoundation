// const examModel = require('../models/exams.models')
// const chapterModel = require('../models/chapter.model')
// const subjectModel = require('../models/subjects.model')
// const questionModel = require('../models/questions.model')
// const redis = require('async-redis');
// const { REDIS_PORT }= require('../../config/config');
// console.log(REDIS_PORT)
// const client = redis.createClient(6379);

// class getcacheQuestions{
//     async dailyCache(){
//         // await client.connect();  
//         console.log('hi');
//         const getSubjects =await subjectModel.find({})
//         // console.log(getSubjects);
//         for(let i in getSubjects){
//             let subject = getSubjects[i];
//             console.log(subject);
//             const query = { subject:subject._id }
//             const getQuestions = await questionModel.find(query);
//             console.log(getQuestions);
//             client.set(subject.name,getQuestions,3600);
//         }
//     }

//     async getSubjectQuestion(subject){
//         // await client.connect();  
//         console.log('hi');
//             const cachedQuestions = await client.smembers(subject);
//             console.log(JSON.parse(cachedQuestions[1]));
//             return cachedQuestions;
//     }
// }

// const getcache = new getcacheQuestions();
// module.exports = getcache;