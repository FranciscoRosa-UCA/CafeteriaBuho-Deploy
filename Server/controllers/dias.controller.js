const Dias = require('../models/Dias.model');
const { message } = require('../utils/utils');
const diasController = {};

diasController.getAll = async (req, res) => {
    try {
        let dias = await Dias.find();
        return res.status(200).json({dias});
    } catch(e) {
        return res.status(500).json(message(false, 'Error interno'));
    }
}
module.exports = diasController;