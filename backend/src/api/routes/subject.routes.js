const subjectController = require('../controllers/subject.controller')
const router = require('express').Router();

router.post('/add',subjectController.addSubject);

module.exports = router;