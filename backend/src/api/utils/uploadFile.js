var multer = require('multer');


  
     function initializeMulter(){
        var storage = multer.diskStorage({ //multers disk storage settings
            destination: function (req, file, cb) {
                cb(null, 'src/api/public/')
            },
            filename: function (req, file, cb) {
                var datetimestamp = Date.now();
                cb(null,Date.now() + file.originalname)
            }
        });
        var upload = multer({storage:storage})
        return upload;
}
module.exports = initializeMulter