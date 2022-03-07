const {examController} = require('../controllers/exam.controller')
const router = require('express').Router();

router.post('/add',examController.addExam);

module.exports = router;