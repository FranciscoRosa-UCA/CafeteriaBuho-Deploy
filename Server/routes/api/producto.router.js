const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: '../uploads/' });
const Role = require('../../data/role');
const {authentication, authorization} = require('../../middlewares/auth.middleware');
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

router.get('/getByNombreTipo/:nombre',
            productoValidators.getByNombreTipo,
            runValidations,
            productoController.getByNombreTipo);

router.get('/getAllSimpleProduct/',
            productoController.getAllSimpleProduct);

router.get('/:id', productoController.getById);

// router.get('/:dia/:categoria', productoController.getByCategory);

router.post('/add',
    authentication,
    authorization(Role.ADMIN),
    upload.single('currentFile'),
    productoValidators.create,
    runValidations,
    productoSanitizer.create,
    productoController.create
);

router.patch('/',
    authentication,
    authorization(Role.ADMIN),
    upload.single('currentFile'),
    productoValidators.create,
    runValidations,
    productoController.update);

router.patch('/setDia',
    authentication,
    authorization(Role.ADMIN),
    productoValidators.setDia,
    runValidations,
    productoController.setDia);

router.delete('/',
    authentication,
    authorization(Role.ADMIN),
    productoValidators.delete,
    runValidations,
    productoController.delete)
    
module.exports = router;