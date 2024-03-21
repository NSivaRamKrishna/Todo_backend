const express = require('express');
const authenticationController = require('../controllers/authenticationController');

const router = express.Router();

router.post('/user/register', authenticationController.createUser);
router.post('/user/login', authenticationController.loginUser);

module.exports = router;
