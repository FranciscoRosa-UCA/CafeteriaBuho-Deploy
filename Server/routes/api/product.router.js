const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: '../uploads/' });
const productController = require('../../controllers/product.controller');

const productValidators = require('../../validators/product.validator');
const runValidations = require('../../validators/index.validator');
const productSanitizer = require('../../sanitizers/product.sanitizer');

router.get('/:dia([A-z]+)', productController.getAll);

router.get('/:id', productController.getById);

router.get('/:dia/:categoria', productController.getByCategory);

router.post('/',
    upload.single('imagen'),
    productValidators.create,
    runValidations,
    productSanitizer,
    productController.create
);
module.exports = router;