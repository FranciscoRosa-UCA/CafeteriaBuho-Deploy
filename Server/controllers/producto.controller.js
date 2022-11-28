const debug = require('debug')('app:producto-controller');
const Categoria = require('../models/Categoria.model');

const Producto = require('../models/Producto.model');
const TipoModel = require('../models/Tipo.model');
const { message } = require('../utils/utils');
const productoController = {};

productoController.getAll = async (req, res) => {
    try {
        let productos = await Producto.find({}, {nombre:1, _id:1});
        return res.status(200).json(productos);
    } catch(e) {
        return res.status(500).json(message(false, 'Error interno'));
    }
}

productoController.getByDay = async (req, res) => {
    let { id } = req.params;
    try {
        let data = await Producto.find({dias: id});
        let _categorias = {};
        data.forEach(platillo => {
            if (!_categorias[platillo.categoria])
                _categorias[platillo.categoria] = [];
            _categorias[platillo.categoria].push(platillo);
        })
        let categorias = [];
    
        for (let _categoria in _categorias) {
            categorias.push({
                nombre: _categoria,
                productos: _categorias[_categoria]
            });
        }
        return res.status(200).json(categorias);
    } catch (e) {
        return res.status(500).json(message(false, 'Error interno'));
    }
}

productoController.getById = async (req, res) => {
    let { id } = req.params;
    let producto = await Producto.findById(id);
    return res.status(200).json(producto);
}

productoController.getByCategory = (req, res) => {
    let { dia, categoria } = req.params;

    return res.status(200).json({dia, categoria});
}

productoController.getByTipo = async(req, res) => {
    let { id } = req.params;
    let tipo = null;
    let productos = await Producto.find({tipo:id}).select(['-__v', '-updatedAt', '-createdAt']);
    tipo = await TipoModel.findById(id);
    return res.status(200).json({productos, nombreTipo: tipo.nombre});
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

productoController.setDia = async (req, res) => {
    try {
        let {productos, dia} = req.body;
        productos.forEach(async (producto) => {
            let _producto = await Producto.findById(producto);
            if (!_producto.dias.includes(dia)) {
                 _producto.dias.push(dia);
                 await _producto.save();
            }
        });
        return res.status(200).json(message(true, 'productos actualizados correctamente'));
    } catch(e) {
        return res.status(500).json(message(false, 'Error interno'));
    }
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