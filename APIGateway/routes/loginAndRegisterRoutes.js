const loginAndRegisterController = require('../controllers/loginAndRegisterController');

const router = require('express').Router();


router.post('*', loginAndRegisterController);

module.exports = router;