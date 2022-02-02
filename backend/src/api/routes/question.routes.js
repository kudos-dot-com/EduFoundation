const questionController = require('../controllers/question.controller')
const router = require('express').Router();
const {verify} =require('../middleware/auth.middleware')

router.post('/add',verify,authController.addQuestion);
router.post('/login',authController.login);

module.exports = router;