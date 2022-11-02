const express = require('express');
const router = express.Router();

const menuController = require('../../controllers/menu.controller');

const menuValidations = require('../../validators/menu.validator');
const runValidations = require('../../validators/index.validator');

router.get('/:dia([A-z]+)', menuController.getAll);

router.get('/:id', menuController.getById);

router.get('/:dia/:categoria', menuController.getByCategory);

router.post('/',
    menuValidations.create,
    runValidations,
    menuController.create
);
module.exports = router;