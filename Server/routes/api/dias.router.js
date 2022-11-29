const express = require('express');
const router = express.Router();
const diasController = require('../../controllers/dias.controller');
router.get('/', diasController.getAll);

module.exports = router;