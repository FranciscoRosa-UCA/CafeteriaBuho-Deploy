const debug = require('debug')('app:compra-controller');
const comprarController = {};
const { response } = require('express');
const Compra = require('../models/Compra.model');
const Product = require('../models/Product.model');
const User = require('../models/User.model');
const { message } = require('../utils/utils');

comprarController.comprar = async (req, res) => {
    let
    {
        email,
        productos
    } = req.body;
    const _productos = productos.map(id => Product.find({id}));
    let usuario = User.find({email});
    const total = _productos.reduce((acc, producto) => {
        return acc+producto.precio;
    }, 0.00);

    if (total > usuario.wallet.ucoins) {
        return message(false, 'No cuenta con suficientes fondos para realizar la compra');
    }
    let compra = new Compra({email, productos, total});
    try {

        const _compra = await compra.save();
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