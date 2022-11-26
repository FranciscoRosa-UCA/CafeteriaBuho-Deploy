const express = require('express');
const router = express.Router();
const tipoController = require('../../controllers/tipo.controller');
router.get('/getAll', tipoController.getAll);
module.exports = router;