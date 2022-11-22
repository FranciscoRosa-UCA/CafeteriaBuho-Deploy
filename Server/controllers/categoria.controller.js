const debug = require('debug')('app:categoria-controller');
const Categoria = require("../models/Categoria.model");
const {message} = require('../utils/utils');
const categoriaController = {};

categoriaController.getAll = async (req, res) => {
    let categorias = await Categoria.find();
    return res.status(200).json(categorias);
}

categoriaController.create = async (req, res) => {
    let categoria = new Categoria(req.body);
    try {
        await categoria.save();
        return res.status(200).json(message(true, 'Categoría agregada exitosamente'));
    } catch(e) {
        return res.status(500).json(message(false, 'Error interno'));
    }
}

categoriaController.update = async (req, res) => {
    let { id, nombre } = req.body;
    let categoria = await Categoria.findById(id);
    if (!categoria)
        return res.status(400).json(message(false, 'La categoría que intenta editar no existe'));
    categoria.nombre = nombre;
    try {
        await categoria.save();
        return res.status(200).json(message(true, 'Categoría actualizada exitosamente'));
    } catch (e) {
        debug(e);
        return res.status(500).json(message(false, 'Error interno'));
    }
}

categoriaController.delete = async (req, res) => {
    let { id } = req.body;
    let ok = await Categoria.findByIdAndRemove(id);
    if (!ok)
        return res.status(400).json(message(false, 'La categoría que intenta eliminar no existe'));
    res.status(200).json(message(true, 'Categoría eliminada exitosamente'));
}

module.exports = categoriaController;