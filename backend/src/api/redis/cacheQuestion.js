// const examModel = require('../models/exams.models')
// const chapterModel = require('../models/chapter.model')
// const subjectModel = require('../models/subjects.model')
// const questionModel = require('../models/questions.model')
// const redis = require('async-redis');
// const { REDIS_PORT }= require('../../config/config');
// console.log(REDIS_PORT)
// const client = redis.createClient(6379);

// class cacheQuestions{
//     async dailyCache(){
//         await client.connect();  
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

//     async addSubject(subject,question){
//         // await client.connect();  
//         await client.sadd(subject,JSON.stringify(question)); //adding new questions to cache
//         await client.expire(subject,3600);   
//         // let cachedQuestions = []
//             // cachedQuestions = await client.get(subject);
//             // if(cachedQuestions){
//             //     console.log(cachedQuestions);
//             //     const arr = [...cachedQuestions,JSON.stringify(question)];
              
//             // }else{
//             //     let arr=[]
//             //     await client.set(subject,JSON.stringify(question)); //adding new questions to cache
//             //     await client.expire(subject,3600);
//             // }
           
//     }
// }

// const cache = new cacheQuestions();
// module.exports = cache;