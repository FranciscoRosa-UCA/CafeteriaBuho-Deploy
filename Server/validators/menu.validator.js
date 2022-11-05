const debug = require('debug')('app:menu-validator');
const { body } = require('express-validator');

const {isArrayFormat} = require('../utils/utils');

const validations = {};

validations.create = [
    body("nombre")
    .notEmpty().trim()
    .withMessage("El nombre no puede estar vacío"),

    body("precio")
    .isFloat({min:0}).withMessage("El elemento debe tener precio"),

    body("dias")
    .optional()
    .custom((value) => {
        return isArrayFormat(value);
    }).withMessage("Los días deben ser un arreglo válido"),

    body("categorias")
    // .if ()
    .notEmpty().withMessage("El elemento debe pertenecer a una categoría")
    .bail()
    .custom(value => {
        return isArrayFormat(value);
    }).withMessage("Las categorías deben ser un arreglo válido"),

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
    .notEmpty().withMessage("El elemento debe tener una descripción"),

    body("imagen")
    .notEmpty().withMessage("El elemento debe tener una imagen")
    .bail()
    .isURL().withMessage("La imagen debe ser una URL válida")
];

module.exports = validations;