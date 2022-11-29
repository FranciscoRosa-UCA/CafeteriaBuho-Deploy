const debug = require('debug')('app:compra-controller');
const comprarController = {};
const Compra = require('../models/Compra.model');
const Product = require('../models/Producto.model');
const User = require('../models/User.model');
const { message } = require('../utils/utils');

comprarController.comprar = async (req, res) => {
    let {
        productos
    } = req.body;
    let { email } = res.user;
    
    try {
        let usuario = await User.findOne({email});
        let total = await productos.reduce(async (acc, producto)=> {
            const _producto = await Product.findById(producto.id);
            return acc + _producto.precio * producto.cantidad;
        }, 0);
        if (total > usuario.wallet.ucoins) {
            return res.status(400).json(message(false, 'No cuenta con suficientes fondos para realizar la compra'));
        }
        usuario.wallet.ucoins -= total;
        let compra = new Compra({
            email,
            productos,
            total
        });
        await usuario.save();
        await compra.save();
        return res.status(200).json(message(true, "Se ha realizado la compra con éxito"));
    } catch(e) {
        debug(e);
        return res.status(500).json({
            ok: false,
            error: "Error interno"
        });
    }
}

module.exports = comprarController;