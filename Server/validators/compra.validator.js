const debug = require('debug')('app:compra-validator');
const { body } = require('express-validator');

const {isArrayFormat} = require('../utils/utils');

const validations = {};

validations.comprar = [
    body("email")
    .isEmail().trim().withMessage("Se debe proveer el email de quien compra"),

    body("productos")
    .isArray().withMessage("Debe proveer un arreglo de productos para comprar")
];

module.exports = validations;