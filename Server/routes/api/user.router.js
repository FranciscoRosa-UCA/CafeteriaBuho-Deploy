const express = require('express');
const multer = require('multer');

const upload = multer({ dest: '../uploads/' });

const userController = require('../../controllers/user.controller');
const router = express.Router();
const userValidations = require('../../validators/user.validator');
const userSanitizer = require('../../sanitizers/user.sanitizer');
const authMiddleware = require('../../middlewares/auth.middleware');
const runValidations = require('../../validators/index.validator');

router.get('/',
            authMiddleware.authentication,
            userController.getById);
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
router.patch('/update',
            upload.single('currentFile'),
            userValidations.update,
            runValidations,
            userSanitizer.update,
            userController.update)

module.exports = router;