const questionController = require('../controllers/question.controller')
const router = require('express').Router();
const {verify} =require('../middleware/auth.middleware')
const initializeMulter = require('../utils/uploadFile');
var upload = initializeMulter()


router.post('/add',questionController.addQuestion);
router.post('/bulkupload',upload.single('file'),questionController.bulkUpload);
router.get('/get/:subject',questionController.getQuestionSubjectwise);
router.get('/getchapter/:subject/:chapter',questionController.getQuestionChapterwise);
router.get('/getexam/:exam',questionController.getQuestionExamwise);
router.get('/gettopic/:subject/:topic/:level',questionController.getQuestionTopicwise);
router.get('/gettopic/random/:subject/:topic/:level',questionController.getQuestionRandomTopicwise);


// router.post('/login',authController.login);

module.exports = router;