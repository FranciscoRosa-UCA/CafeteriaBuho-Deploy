const User = require("../models/User.model");
const { message } = require("../utils/utils");

const walletController = {};

walletController.recargar = async (req, res) => {
    let {
        emisor,
        qr,
        ucoins
    } = req.body;
    ucoins = parseInt(ucoins);
    let _emisor = await User.findOne({email: emisor});
    if (_emisor.rol == "ROL_ADMIN") {
        let _receptor = await User.findOne({"wallet.qr" : qr});

        _receptor.wallet.ucoins += ucoins;
        try {
            await _receptor.save();
            return res.status(200).json(message(true, 'Saldo agregado correctamente'));
        } catch(e) {
            debug(e);
            return res.status(500).json(message(false, 'Error interno'));
        }
    }
    return res.status(401).json(message(false, 'No puede realizar esta acción'));

}

module.exports = walletController;