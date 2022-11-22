const {body} = require('express-validator');
const validations = {};

validations.create = [
    body('nombre')
    .notEmpty().withMessage('La categoría debe tener un nombre')
];

validations.update = [
    body('id')
    .notEmpty().withMessage('Debe proveer el id de la categoría a actualizar').bail()
    .isMongoId().withMessage('Debe proveer un id válido'),
    body('nombre')
    .notEmpty().withMessage('La categoría debe tener un nombre')
];

validations.delete = [
    body('id')
    .notEmpty().withMessage('Debe proveer el id de la categoría a eliminar').bail()
    .isMongoId().withMessage('Debe proveer un id válido'),
];
module.exports = validations;