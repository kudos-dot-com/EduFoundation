const {MONGO_URI}= require('../../config/config'); 
var MongoClient = require('mongodb').MongoClient;
 
    function createCollection(name){
        MongoClient.connect(MONGO_URI, function(err, db) {
            if (err) throw err;

            console.log("Switched to "+db.databaseName+" database");

            db.createCollection(name, function(err, result) {
                if (err) throw err;
                console.log("Collection is created!");
                db.close();
            });
        });
    }
    
module.exports = createCollection;