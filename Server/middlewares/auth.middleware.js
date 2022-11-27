const User = require("../models/User.model");
const { message, validateToken } = require("../utils/utils");
const tokenPrefix = "Bearer"
const middlewares = {};

middlewares.authentication = async (req, res, next) => {
    const {authorization} = req.headers;
    if (!authorization) {
        return res.status(401).json(message(false, 'No autorizado'));
    }
    const [prefix, token] = authorization.split(" ");

    if (prefix !== tokenPrefix || !token){
        return res.status(401).json(message(false, 'No autorizado'));
    }
    const payload = validateToken(token);
    if (!payload) {
        return res.status(401).json(message(false, 'No autorizado'));
    }
    const {id} = payload.data;
    const user = await User.findById(id).select('-password');
    if (!user){
        return res.status(401).json(message(false, 'No autorizado'));
    }
    const isValidToken = user.tokens.includes(token);
    
    if (!isValidToken) {
        return res.status(401).json(message(false, 'No autorizado'));
    }
    res.user = user;
    res.token = token;
    next();
}

module.exports = middlewares;