const questionController = require('../controllers/question.controller')
const router = require('express').Router();
const {verify} =require('../middleware/auth.middleware')

router.post('/add',questionController.addQuestion);
router.get('/get/:subject',questionController.getQuestion);
router.get('/getchapter/:subject/:chapter',questionController.getQuestionChapterwise);
router.get('/getexam/:exam',questionController.getQuestionExamwise);
router.get('/gettopic/:subject/:topic/:level',questionController.getQuestionExamwise);


// router.post('/login',authController.login);

module.exports = router;