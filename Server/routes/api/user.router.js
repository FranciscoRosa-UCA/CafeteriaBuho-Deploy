const express = require('express');

const userController = require('../../controllers/user.controller');
const router = express.Router();
const userValidations = require('../../validators/user.validator');
const runValidations = require('../../validators/index.validator');

router.post('/getUser',
            userValidations.getByEmail,
            runValidations,
            userController.getByEmail);
router.post('/login',
            userValidations.login,
            runValidations,
            userController.login);
router.post('/signup',
            userValidations.create,
            runValidations,
            userController.signup)

module.exports = router;