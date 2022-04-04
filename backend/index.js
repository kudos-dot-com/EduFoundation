const express = require('express');
const app=express();
const {PORT}= require('./src/config/config');
const DbConnect =require('./src/config/database')
const cache = require('./src/api/redis/cacheQuestion')
const cors=require('cors');

app.use(cors())
app.use(require('express').json());

// db connection
DbConnect();
// cache.addSubject();
// routes
app.use('/api',require('./src/api/routes/auth.routes'))
app.use('/api/question',require('./src/api/routes/question.routes'))
app.use('/api/subject',require('./src/api/routes/subject.routes'))
app.use('/api/chapter',require('./src/api/routes/chapter.routes'))
app.use('/api/exam',require('./src/api/routes/exam.routes'))


// port
app.listen((PORT),()=>{
    console.log(`server starting at port ${PORT}`);
});