const express = require('express');
const router = express.Router();
const validations = require('../../validators/categoria.validator');
const runValidations = require('../../validators/index.validator')
const categoriaController = require('../../controllers/categoria.controller');
const {authentication, authorization} = require('../../middlewares/auth.middleware');
const Role = require('../../data/role');

router.get('/getAll', categoriaController.getAll);
router.post('/',
            authentication,
            authorization(Role.ADMIN),
            validations.create,
            runValidations,
            categoriaController.create);
router.patch('/',
            authentication,
            authorization(Role.ADMIN),
            validations.update,
            runValidations,
            categoriaController.update);
router.delete('/',
            authentication,
            authorization(Role.ADMIN),
            validations.delete,
            runValidations,
            categoriaController.delete);
module.exports = router;
