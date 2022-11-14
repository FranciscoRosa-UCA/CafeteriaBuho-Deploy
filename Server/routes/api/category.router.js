const express = require('express');
const router = express.Router();

const categoryController = require('../../controllers/category.controller');

router.get('/', categoryController.getAll);
router.post('/', categoryController.add);
router.delete('/', categoryController.delete);
module.exports = router;
