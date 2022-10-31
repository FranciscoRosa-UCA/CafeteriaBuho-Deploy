const express = require('express');
const router = express.Router();

const menuController = require('../../controllers/menu.controller');

router.get('/:dia([A-z]+)', menuController.getAll);
router.get('/:id', menuController.getById);
router.get('/:dia/:categoria', menuController.getByCategory);
router.post('/', menuController.save);
module.exports = router;