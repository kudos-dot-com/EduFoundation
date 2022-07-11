const express = require('express');
const app=express();
const {PORT}= require('./src/config/config');
const DbConnect =require('./src/config/database')
const cache = require('./src/api/redis/cacheQuestion')
const bodyParser = require('body-parser');
var multer = require('multer');
const cors=require('cors');
// const client = require('./src/api/redis/configure')
// const redis = require("redis");
              


// const Redis = require("ioredis");

//     let client = new Redis("rediss://:6a5de6b3cc3348deb0af0ce994d884b8@global-prompt-monster-30728.upstash.io:30728");
//     client.set('foo', 'bar');
app.use(cors())
// app.use(require('express').json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


// db connection
DbConnect();


// cache.addSubject();
require('./src/api/models/topic.model')
require('./src/api/models/subjects.model')
require('./src/api/models/questions.model')
require('./src/api/models/exams.models')
require('./src/api/models/users')
require('./src/api/models/chapter.model')

// routes
app.use('/api',require('./src/api/routes/auth.routes'))
app.use('/api/question',require('./src/api/routes/question.routes'))
app.use('/api/subject',require('./src/api/routes/subject.routes'))
app.use('/api/chapter',require('./src/api/routes/chapter.routes'))
app.use('/api/topic',require('./src/api/routes/topic.routes'))
app.use('/api/exam',require('./src/api/routes/exam.routes'))


// port
app.listen((PORT),()=>{
    console.log(`server starting at port ${PORT}`);
});