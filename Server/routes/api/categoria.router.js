const express = require('express');
const router = express.Router();
const validations = require('../../validators/categoria.validator');
const runValidations = require('../../validators/index.validator')
const categoriaController = require('../../controllers/categoria.controller');

router.get('/', categoriaController.getAll);
router.post('/',
            validations.create,
            runValidations,
            categoriaController.create);
router.patch('/',
            validations.update,
            runValidations,
            categoriaController.update);
router.delete('/',
            validations.delete,
            runValidations,
            categoriaController.delete);
module.exports = router;
