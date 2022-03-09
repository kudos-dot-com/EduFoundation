// const fetch = require('node-fetch');
const redis = require('redis');
const { REDIS_PORT }= require('./config');
// const client = redis.createClient(REDIS_PORT);
const client = redis.createClient('127.0.0.1', 6379);

function RedisConnect()
{ 
   try{
    console.log("redis")
    client.on('connect', function() {
        console.log('Connected!');
    });
   }
   catch(err){
       console.log(err);
   }
}

module.exports = RedisConnect;