const menuData = require('../testdata/menu.data');
const Producto = require('../models/Producto.model');
const { message } = require('../utils/utils');
const productoController = {};

productoController.getAll = (req, res) => {
    let { dia } = req.params;
    let data = menuData.filter(el => el.dias.includes(dia));
    return res.status(200).json(data);
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
    let producto = new Producto(res.producto);
    try {
        const newProducto = await producto.save();

        return res.status(200).json(newProducto);
    } catch (e) {
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