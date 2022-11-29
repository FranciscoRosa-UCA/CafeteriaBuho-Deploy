const middlewares = {};
const debug = require('debug')('app:subir-foto-middleware');

const {uploadPhoto, removePhoto} = require('../utils/utils'); 

middlewares.subirFoto = async (req, res, next)=>{
    try {
        if (!req.file) {
            return res.status(400).json({error: "El producto debe tener una imagen"});
        }
        let imagen = await uploadPhoto(req.file.path, req.body.nombre);
        removePhoto(req.file.path, res);
    
        if (imagen === "") {
            debug('Error al subir imagen');
            return res.status(500).send({error:"Error interno"});
        }
        res.imagen = imagen;
    } catch (e) {
        return res.status(500).send({error:"Error interno"});
    }
    next();
}

module.exports = middlewares;