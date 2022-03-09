require('dotenv').config();
module.exports={
    PORT:process.env.PORT,
    REDIS_PORT:process.env.REDIS_PORT,
    MONGO_URI:process.env.MONGO_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    DATABASE:process.env.DATABASE  
}
