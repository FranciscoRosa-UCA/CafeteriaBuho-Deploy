const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: '../uploads/' });
const productoController = require('../../controllers/producto.controller');

const productoValidators = require('../../validators/producto.validator');
const runValidations = require('../../validators/index.validator');
const productoSanitizer = require('../../sanitizers/producto.sanitizer');
router.get('/getAll', productoController.getAll);
router.get('/getByDay/:id',
            productoValidators.getByDay,
            runValidations,
            productoController.getByDay);

router.get('/getByTipo/:id',
            productoValidators.getBySomeId,
            runValidations,
            productoController.getByTipo);

router.get('/:id', productoController.getById);

// router.get('/:dia/:categoria', productoController.getByCategory);

router.post('/add',
    upload.single('currentFile'),
    productoValidators.create,
    runValidations,
    productoSanitizer.create,
    productoController.create
);

router.patch('/',
    upload.single('currentFile'),
    productoValidators.create,
    runValidations,
    productoController.update);

router.patch('/setDia',
    productoValidators.setDia,
    runValidations,
    productoController.setDia);

router.delete('/',
    productoValidators.delete,
    runValidations,
    productoController.delete)
    
module.exports = router;