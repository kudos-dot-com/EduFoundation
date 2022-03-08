const {MONGO_URI,DATABASE}= require('../../config/config'); 
const database = DATABASE;
var MongoClient = require('mongodb').MongoClient;
 
    function createCollection(name){
        MongoClient.connect(MONGO_URI, function(err, client) {
            if (err) throw err;
            const connect = client.db(database);
            // console.log("Switched to "+connect+" database");

            connect.createCollection(name, function(err, result) {
                if (err) throw err;
                console.log("Collection is created!");
                client.close();
            });
        });
    }
    
module.exports = createCollection;