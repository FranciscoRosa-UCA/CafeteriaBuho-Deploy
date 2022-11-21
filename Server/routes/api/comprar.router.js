const express = require('express');
const comprarController = require('../../controllers/comprar.controller');
const router = express.Router();

const validators = require('../../validators/compra.validator');
const runValidators = require('../../validators/index.validator'); 
const compraSanitizer = require('../../sanitizers/comprar.sanitizer');

router.post('/',
        validators.comprar,
        runValidators,
        compraSanitizer,
        comprarController.comprar);
router.get('/:id', (req, res) => {
    return res.status(400).json({error: req.params.id});
});
module.exports = router;