const User = require("../models/User.model");
const { message } = require("../utils/utils");
const debug = require('debug')('app:wallet-controller');
const walletController = {};

walletController.recargar = async (req, res) => {
    console.log(req.body);
    let {
        qr,
        ucoins
    } = req.body;
    ucoins = parseInt(ucoins);
    try {
        let _receptor = await User.findOne({"wallet.qr" : qr});
    
        _receptor.wallet.ucoins += ucoins;
        await _receptor.save();
        return res.status(200).json(message(true, 'Saldo agregado correctamente'));
    } catch(e) {
        debug(e);
        return res.status(500).json(message(false, 'Error interno'));
    }

}

module.exports = walletController;