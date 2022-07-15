var multer = require('multer');
const { response, incompleteField } = require("../helpers/response");

  
     function initializeMulter(){
        try{
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
        catch(err){
      return response(res, "", "something went wrong while uploading ", 500);

        }
}
module.exports = initializeMulter