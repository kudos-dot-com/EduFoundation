const {chapterController} = require('../controllers/chapter.controller')
const router = require('express').Router();

router.post('/add',chapterController.addChapter);
router.get('/chapter/:subject/',chapterController.getChapter);

module.exports = router;