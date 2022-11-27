const tipoController = {};
const Tipo = require('../models/Tipo.model');

tipoController.getAll = async (req, res) => {
    let tipo = await Tipo.find();
    res.status(200).json(tipo);
}

tipoController.getById = async (req, res) => {
    let tipo = await Tipo.findById(req.body.id);
    res.status(200).json(tipo);
}

module.exports = tipoController;