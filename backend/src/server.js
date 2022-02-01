const express = require('express');
const app=express();
const {PORT}= require('./config/config');
const DbConnect =require('./config/database')
const cors=require('cors');

app.use(cors())
app.use(require('express').json());
DbConnect();

app.listen(PORT,()=>{
    console.log(`server starting at port ${PORT}`);
});