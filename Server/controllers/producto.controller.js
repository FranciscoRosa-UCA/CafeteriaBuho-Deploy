const debug = require('debug')('app:producto-controller');
const Categoria = require('../models/Categoria.model');

const Producto = require('../models/Producto.model');
const { message } = require('../utils/utils');
const productoController = {};

productoController.getByDay = async (req, res) => {
    let { id } = req.params;
    let data = await Producto.find({dias: id});
    let categorias = {};
    data.forEach(platillo => {
        if (!categorias[platillo.categoria])
            categorias[platillo.categoria] = [];
        categorias[platillo.categoria].push(platillo);
    })
    return res.status(200).json(categorias);
}

productoController.getById = (req, res) => {
    let { id } = req.params;
    return res.status(200).json({id});
}

productoController.getByCategory = (req, res) => {
    let { dia, categoria } = req.params;

    return res.status(200).json({dia, categoria});
}

productoController.create = async (req, res) => {
    // De sanitizer viene un objeto llamado res.product
    try {
        let _categoria = await Categoria.findById(res.producto.categoriaId);
        let categoria = _categoria.nombre;
        let producto = await Producto.create({...res.producto, categoria});
        return res.status(200).json(producto);
    } catch (e) {
        debug(e);
        return res.status(500).json({error: "Error interno"});
    }
}

productoController.update = async (req, res) => {
    try {
        let producto = await Producto.findByIdAndUpdate(req.body.id, res.producto);
        if (!producto)
            return res.status(400).json(message(false, 'El producto que intenta actualizar no existe'));    
    } catch(e) {
        debug(e);
        return res.status(500).json(message(false, 'Error interno'));
    }
    return res.status(200).json(message(true, 'Producto actualizado exitosamente'));
    
}

productoController.delete = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.body.id);
        return res.status(200).json(message(true, 'Producto eliminado exitosamente'));
    } catch (e) {
        debug(e);
        return res.status(500).json(message(false, 'Error interno'));
    }
};

module.exports = productoController;