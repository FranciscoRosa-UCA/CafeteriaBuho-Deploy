const debug = require('debug')('app:menu-validator');
const { body, param } = require('express-validator');

const {isArrayFormat} = require('../utils/utils');

const validations = {};

validations.getBySomeId = [
    param('id')
    .isMongoId().withMessage('Debe brindar un dia válido') 
];

validations.getByDay = [
    param('id')
    .isNumeric().withMessage('Debe brindar un dia válido') 
];

validations.create = [
    body("nombre")
    .notEmpty().trim()
    .withMessage("El nombre no puede estar vacío"),

    body("precio")
    .isFloat({min:0}).withMessage("El elemento debe tener precio"),

    // body("dias")
    // .optional()
    // .custom((value) => {
    //     return isArrayFormat(value);
    // }).withMessage("Los días deben ser un arreglo válido"),

    body("categoriaId")
    .notEmpty().withMessage("El elemento debe pertenecer a una categoría").bail()
    .isMongoId().withMessage('Debe ingresar un id válido'),

    body("tipo")
    .notEmpty().withMessage("El elemento debe ser de un tipo")
    .bail()
    .isMongoId().withMessage("El tipo del elemento debe ser un tipo válido"),

    body("anidados")
    .optional()
    .custom(value => {
        return isArrayFormat(value);
    }).withMessage("El elemento debe tener un arreglo válido de elementos anidados"),

    body("descripcion")
    .notEmpty().withMessage("El elemento debe tener una descripción")
];

validations.delete = [
    body('id')
    .notEmpty().withMessage('Debe proveer el id del producto que desea eliminar').bail()
    .isMongoId().withMessage('Debe proveer un id válidos')
];

validations.setDia = [
    body("productos")
    .isArray().withMessage('Debe proveer un arreglo válido de productos'),
    body('dia')
    .isNumeric().withMessage('Debe proveer un el dia que desea darle al producto')
];
module.exports = validations;