const Categoria = require("../models/Categoria.model");
const {message} = require('../utils/utils');
const categoriaController = {};

categoriaController.getAll = (req, res) => {
    return res.status(200).json({});
}

categoriaController.add = async (req, res) => {
    let categoria = new Categoria(req.body);
    try {
        await categoria.save();
        return res.status(200).json(message(true, 'Categoria agregada exitosamente'));
    } catch(e) {
        return res.status(500).json(message(false, 'Error interno'));
    }
}

categoriaController.delete = (req, res) => {
    let { id } = req.body;
    res.status(200).json({id});
}

module.exports = categoriaController;