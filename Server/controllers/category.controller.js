const categoryController = {};

categoryController.getAll = (req, res) => {
    return res.status(200).json({});
}

categoryController.add = (req, res) => {
    let { nombre } = req.body;
    
    return res.status(200).json({nombre});
}

categoryController.delete = (req, res) => {
    let { id } = req.body;
    res.status(200).json({id});
}

module.exports = categoryController;