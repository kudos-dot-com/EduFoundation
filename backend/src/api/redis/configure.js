const Redis = require("ioredis");

let client = new Redis("rediss://:842aa3d51f4d4679a24f4fd8c34b9697@us1-dear-oyster-37619.upstash.io:37619");

module.exports = client;