const {topicController} = require('../controllers/topic.controller')
const router = require('express').Router();

router.post('/add',topicController.addtopic);
router.get('/:subject',topicController.gettopic);

module.exports = router;