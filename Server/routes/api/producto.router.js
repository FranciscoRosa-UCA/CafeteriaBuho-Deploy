const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: '../uploads/' });
const productoController = require('../../controllers/producto.controller');

const productoValidators = require('../../validators/producto.validator');
const runValidations = require('../../validators/index.validator');
const productoSanitizer = require('../../sanitizers/producto.sanitizer');

router.get('/:dia([A-z]+)', productoController.getAll);

router.get('/:id', productoController.getById);

router.get('/:dia/:categoria', productoController.getByCategory);

router.post('/',
    upload.single('imagen'),
    productoValidators.create,
    runValidations,
    productoSanitizer.create,
    productoController.create
);

router.patch('/',
    upload.single('imagen'),
    productoValidators.create,
    runValidations,
    productoController.update);

router.delete('/',
    productoValidators.delete,
    runValidations,
    productoController.delete)
    
module.exports = router;