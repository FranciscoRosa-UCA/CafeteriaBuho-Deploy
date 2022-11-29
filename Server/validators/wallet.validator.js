const { body } = require('express-validator');

const validations = {};

validations.recargar = [
    body('qr')
    .notEmpty().withMessage('Debe proveer la direccion de billetera'),
    body('ucoins')
    .notEmpty().withMessage('Debe proveer la cantidad a recargar')
];

module.exports = validations;