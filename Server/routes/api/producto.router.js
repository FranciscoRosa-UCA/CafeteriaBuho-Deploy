const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: '../uploads/' });
const productoController = require('../../controllers/producto.controller');

const productoValidators = require('../../validators/producto.validator');
const runValidations = require('../../validators/index.validator');
const productoSanitizer = require('../../sanitizers/producto.sanitizer');

router.get('/getByDay/:id',
            productoValidators.getBySomeId,
            runValidations,
            productoController.getByDay);

router.get('/getByTipo/:id',
            productoValidators.getBySomeId,
            runValidations,
            productoController.getByTipo);

router.get('/:id', productoController.getById);

// router.get('/:dia/:categoria', productoController.getByCategory);

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