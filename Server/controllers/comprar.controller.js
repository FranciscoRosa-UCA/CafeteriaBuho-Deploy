const debug = require('debug')('app:compra-controller');
const comprarController = {};
const Compra = require('../models/Compra.model');

comprarController.comprar = async (req, res) => {
    let compra = new Compra(req.body);
    try { 
        const _compra = await compra.save();
        return res.status(200).json({
                ok: true,
                message: "Se ha realizado la compra existosamente"
            });
    } catch(e) {
        debug(e);
        return res.status(500).json({
            ok: false,
            error: "Error interno"
        });
    }
}

module.exports = comprarController;