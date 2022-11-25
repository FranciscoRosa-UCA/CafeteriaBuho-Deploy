const debug = require('debug')('app:menu-validator');
const { body } = require('express-validator');

const validations = {};

validations.create = [
    body('username').trim()
    .notEmpty().withMessage('El nombre de usuario no puede estar vacío'),
    body('email').trim()
    .notEmpty().withMessage('El email no puede estar vacío').bail()
    .isEmail().withMessage('Debe ingresar un email válido'),
    body('password')
    .notEmpty().withMessage('La contraseña no puede estar vacía'),
];

validations.login = [
    body('email').trim()
    .notEmpty().withMessage('Debe ingresar un email').bail()
    .isEmail().withMessage('Debe ingresar un email válido'),
    body('password')
    .notEmpty().withMessage('Debe ingresar una contraseña')
]

validations.getByEmail = [
    body('token').trim()
    .notEmpty().withMessage('No ha iniciado sesion').bail()
]

module.exports = validations;