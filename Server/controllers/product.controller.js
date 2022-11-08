const menuData = require('../testdata/menu.data');
const Product = require('../models/Product.model');
const productController = {};

productController.getAll = (req, res) => {
    let { dia } = req.params;
    let data = menuData.filter(el => el.dias.includes(dia));
    return res.status(200).json(data);
}

productController.getById = (req, res) => {
    let { id } = req.params;
    return res.status(200).json({id});
}

productController.getByCategory = (req, res) => {
    let { dia, categoria } = req.params;

    return res.status(200).json({dia, categoria});
}

productController.create = async (req, res) => {
    // De sanitizer viene un objeto llamado res.product
    let product = new Product(res.product);
    try {
        const newProduct = await product.save();

        return res.status(200).json(newProduct);
    } catch (e) {
        return res.status(400).json({error: "Error interno"});
    }
}

module.exports = productController;