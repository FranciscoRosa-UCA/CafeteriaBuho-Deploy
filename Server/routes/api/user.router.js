const express = require('express');

const userController = require('../../controllers/user.controller');
const router = express.Router();

router.get('/:id', userController.getById);
router.post('/login', userController.login);
router.post('/signup', userController.signup)

module.exports = router;