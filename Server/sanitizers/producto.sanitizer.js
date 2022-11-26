const debug = require('debug')('app:producto-sanitizer');

const {uploadPhoto, removePhoto} = require('../utils/utils'); 

const sanitizer = {};

sanitizer.create = async(req, res, next) => {
    
    if (!req.file) {
        removePhoto(req.file.path, res);
        return res.status(400).json({error: "El producto debe tener una imagen"});
    }
    let imagen = await uploadPhoto(req.file.path, req.body.nombre);
    removePhoto(req.file.path, res);

    if (imagen === "") {
        debug('Error al subir imagen');
        return res.status(500).send({error:"Error interno"});
    }

    let {
        nombre,
        precio,
        dias,
        categorias,
        tipo,
        anidados,
        descripcion
    }         = req.body;

    dias = JSON.parse(dias);

    categorias = JSON.parse(categorias);
    categorias = categorias.map(el => {
        return parseInt(el);
    });
    if (anidados)
        anidados = JSON.parse(anidados);
    res.producto = 
    {
        nombre,
        precio,
        dias,
        categorias,
        tipo,
        anidados,
        descripcion,
        imagen
    };
    next();
};

sanitizer.update = async (req, res, next) => {
    if (req.file) {
        let imagen = await uploadPhoto(req.file.path, req.body.nombre);
        removePhoto(req.file.path, res);
        if (imagen === "") {
            debug('Error al subir imagen');
            return res.status(500).send({error:"Error interno"});
        } else
            res.producto = {...res.producto, imagen};
    }
    
    let {
        nombre,
        precio,
        dias,
        categorias,
        tipo,
        anidados,
        descripcion
    }         = req.body;

    dias = JSON.parse(dias);

    categorias = JSON.parse(categorias);
    categorias = categorias.map(el => {
        return parseInt(el);
    });
    if (anidados)
        anidados = JSON.parse(anidados);
    res.producto = 
    {
        ...res.producto,
        nombre,
        precio,
        dias,
        categorias,
        tipo,
        anidados,
        descripcion
    };

    next();
}
module.exports = sanitizer;