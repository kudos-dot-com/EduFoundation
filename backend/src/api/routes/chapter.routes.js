const chapterController = require('../controllers/chapter.controller')
const router = require('express').Router();

router.post('/add',chapterController.addSubject);

module.exports = router;