const menuData = require('../testdata/menu.data');
const menuController = {};

menuController.getAll = (req, res) => {
    let { dia } = req.params;
    let data = menuData.filter(el => el.dias.includes(dia));
    return res.status(200).json(data);
}

menuController.getById = (req, res) => {
    let { id } = req.params;
    return res.status(200).json({id});
}

menuController.getByCategory = (req, res) => {
    let { dia, categoria } = req.params;

    return res.status(200).json({dia, categoria});
}

menuController.save = (req, res) => {
    let {nombre,
        precio,
        dias,
        categorias,
        tipo,
        anidados,
        descripcion,
        imagen}         = req.body;
    return res.status(200).json(req.body);
}

module.exports = menuController;