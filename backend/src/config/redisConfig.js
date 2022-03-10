// const fetch = require('node-fetch');
const redis = require('redis');
const { REDIS_PORT }= require('./config');
// const client = redis.createClient(REDIS_PORT);
const client = redis.createClient('127.0.0.1', 6379);

class redisConf{
    async RedisConnect()
    { 
        await client.connect();     
    }
}
const redisConfig = new redisConf();
module.exports = { redisConfig };