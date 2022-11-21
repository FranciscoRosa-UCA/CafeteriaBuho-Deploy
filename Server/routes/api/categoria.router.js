const express = require('express');
const router = express.Router();

const categoriaController = require('../../controllers/categoria.controller');

router.get('/', categoriaController.getAll);
router.post('/', categoriaController.add);
router.delete('/', categoriaController.delete);
module.exports = router;
