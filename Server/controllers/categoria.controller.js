const debug = require('debug')('app:categoria-controller');
const Categoria = require("../models/Categoria.model");
const Producto = require('../models/Producto.model');
const {message} = require('../utils/utils');
const categoriaController = {};

categoriaController.getAll = async (req, res) => {
    let categorias = await Categoria.find();
    return res.status(200).json(categorias);
}

categoriaController.create = async (req, res) => {
    let categoria = new Categoria(req.body);
    try {
        let newCategoria = await categoria.save();
        return res.status(200).json({
            categoria: newCategoria, 
            response: message(true, 'Categoría agregada exitosamente')
        });
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
    try {
        let productos = await Producto.find({categoria: id});
        if (productos.length > 0) {
            let cat = await Categoria.findByIdAndRemove(id);
            if (!cat)
                return res.status(400).json(message(false, 'La categoría que intenta eliminar no existe'));
                
            return res.status(200).json(message(true, 'Categoría eliminada exitosamente'));
        } else {
            return res.status(401).json(message(false, 'No puede eliminar una categoria que contenga productos')); 
        }
    }catch(e) {
        return res.status(500).json(message(false, 'Error interno'));
    }
}

module.exports = categoriaController;