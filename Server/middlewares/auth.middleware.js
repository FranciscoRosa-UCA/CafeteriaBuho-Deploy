const User = require("../models/User.model");
const Rol = require('../data/role');
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
middlewares.authorization = (role=Rol.ADMIN) => {
    return (req, res, next) => {
        try{
            const {roles = []} = res.user; 
            const roleIndex = roles.findIndex(_role => (_role == role || role == Rol.ADMIN));
            if (roleIndex < 0)
                return res.status(403).json(message(false, 'Permisos insuficientes'));
            next();
        } catch(e) {
            return res.status(500).json(message(false, 'Error interno'));
        }
    }
}
module.exports = middlewares;