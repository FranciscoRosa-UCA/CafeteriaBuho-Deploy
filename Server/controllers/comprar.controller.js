const debug = require('debug')('app:compra-controller');
const comprarController = {};
const Compra = require('../models/Compra.model');
const Product = require('../models/Producto.model');
const User = require('../models/User.model');
const { message } = require('../utils/utils');

comprarController.comprar = async (req, res) => {
    let
    {
        email,
        productos
    } = req.body;

    let usuario = await User.findOne({email});
    const _productos = await Product.find( { _id : { $in : productos } } );
    const total = _productos.reduce((acc, producto) => {
        return acc+producto.precio;
    }, 0.00);
    if (total > usuario.wallet.ucoins) {
        return res.status(400).json(message(false, 'No cuenta con suficientes fondos para realizar la compra'));
    }
    usuario.wallet.ucoins -= total;
    let compra = new Compra({email, productos, total});
    try {
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