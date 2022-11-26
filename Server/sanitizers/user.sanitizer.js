const debug = require('debug')('app:user-sanitizer');
const {uploadPhoto, removePhoto} = require('../utils/utils'); 

const sanitizers = {};

sanitizers.update = async (req, res, next) => {
    let imagen = "";
    if (req.file) {
        imagen = await uploadPhoto(req.file.path, req.body.username);
        removePhoto(req.file.path, res);
        if (imagen === "") {
            debug('Error al subir imagen');
            return res.status(500).send({error:"Error interno"});
        }
    }
    res.foto = imagen;
    next();
};

module.exports = sanitizers;