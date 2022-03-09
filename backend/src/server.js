const express = require('express');
const app=express();
const {PORT}= require('./config/config');
const DbConnect =require('./config/database')
// const RedisConnect =require('./config/redisConfig')
const cache = require('./api/redis/cacheQuestion')
const cors=require('cors');

app.use(cors())
app.use(require('express').json());

// db connection
DbConnect();
// RedisConnect();
// cache.addSubject();
// routes
app.use('/api',require('./api/routes/auth.routes'))
app.use('/api/question',require('./api/routes/question.routes'))
app.use('/api/subject',require('./api/routes/subject.routes'))
app.use('/api/chapter',require('./api/routes/chapter.routes'))
app.use('/api/exam',require('./api/routes/exam.routes'))


// port
app.listen(PORT,()=>{
    console.log(`server starting at port ${PORT}`);
});