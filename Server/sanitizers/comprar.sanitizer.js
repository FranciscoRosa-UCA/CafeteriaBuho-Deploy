module.exports = (req, res, next) => {
    req.body.productos = JSON.parse(req.body.productos);

    next();
};