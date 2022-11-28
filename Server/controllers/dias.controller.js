const debug = require('debug')('app:dias-controller')
const Dias = require('../data/dias');
const { message } = require('../utils/utils');
const diasController = {};

diasController.getAll = (req, res) => {
    try {
        return res.status(200).json({dias:Dias});
    } catch(e) {
        debug(e);
        return res.status(500).json(message(false, 'Error interno'));
    }
}
module.exports = diasController;