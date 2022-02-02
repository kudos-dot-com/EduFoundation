const express = require('express');
const app=express();
const {PORT}= require('./config/config');
const DbConnect =require('./config/database')
const cors=require('cors');

app.use(cors())
app.use(require('express').json());

// db connection
DbConnect();

// routes
app.use('/api',require('./api/routes/auth.routes'))
app.use('/api/question',require('./api/routes/question.routes'))

// port
app.listen(PORT,()=>{
    console.log(`server starting at port ${PORT}`);
});