const cloudinary = require('cloudinary');
const fs = require('fs');
const debug = require('debug')('app:sanitizer');

const sanitizer = {};

const uploadPhoto = async (url, name) => {
    let uri = "";
    try {
        let res = await cloudinary.v2.uploader.upload(`${url}`, {public_id: name});
        uri = res.url;
    } catch (error) {
        uri = "";
    }
    return uri;
}

const removePhoto = (path, res) => {
    fs.rm(path, (err)=>{
        if (err) {
            debug(err);
            return res.status(500).send({error:"Error interno"});
        }
    });
}

sanitizer.create = async(req, res, next) => {
    
    if (!req.file) {
        removePhoto(req.file.path, res);
        return res.status(400).json({error: "El producto debe tener una imagen"});
    }
    let imagen = await uploadPhoto(req.file.path, req.body.name);
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
    res.product = 
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
    let imagen = null;
    if (req.file) {
        imagen = await uploadPhoto(req.file.path, req.body.name);
        removePhoto(req.file.path, res);
        if (imagen === "") {
            debug('Error al subir imagen');
            return res.status(500).send({error:"Error interno"});
        }
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
    res.product = 
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
}
module.exports = sanitizer;