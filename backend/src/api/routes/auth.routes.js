const authController = require('../controllers/auth.controller')
const router = require('express').Router();

router.post('/signup',authController.signup);
router.post('/login',authController.login);

module.exports = router;