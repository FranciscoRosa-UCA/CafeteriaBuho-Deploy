const bcrypt = require('bcrypt');
const debug = require('debug')('app:user-controller');
const jwt = require('jsonwebtoken');
const { getWalletID, message } = require('../utils/utils');
const User = require('../models/User.model');
const userController = {}; 

const getToken = (user) => {
    const token = jwt.sign({
        data: {email: user.email, username: user.username, role: user.rol}
    }, process.env.TOKEN)
    return token;
}

userController.getByEmail = async (req, res) => {
    let { token } = req.body;
    try {
        let payload = jwt.verify(token, process.env.TOKEN);
        let email = payload.data.email;
        let user = await User.findOne({email}).select(['-password', '-wallet']);
        if (user)
            res.status(200).json({user});
        else
            res.status(400).json(message(false, 'No se ha encontrado un usuario válido'));
    } catch (e) {
        debug(e);
        if (e instanceof jwt.JsonWebTokenError) {
			// if the error thrown is because the JWT is unauthorized, return a 401 error
			return res.status(401).json(message(false, 'No es un usuario válido'));
		}
        res.status(500).json(message(false, 'Error interno'));
    }
    return;
}

userController.login = async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    let match = false;
    if (user) {
        match = await bcrypt.compare(password, user.password);
        if (match) {
            const token = getToken(user);
            return res.status(200).json({response: message(true, 'Ha iniciado sesión correctamente'), token});
        }
        else
            return res.status(400).json({error: "Credenciales erróneas"});
    }
}

userController.signup = async(req, res) => {
    /**
     * username, email, institucion, password: necesarios para el registro simple
     * 
     * teléfono y photo serán campos a llenar en el futuro
     * 
     * la contraseña solo se requerirá en el registro simple, para iniciar con google se guardarán los datos que brinda el token y no se necesitará contraseña
     */
    let {
        username,
        email,
    } = req.body;
    let _password = req.body.password;
    let qr = getWalletID(email);
    let wallet = {
        qr,
        ucoins: 0.00,
    }
    // hacer hash al password
    const saltRounds = 10;
    const password = await bcrypt.hash(_password, saltRounds);
    
    let user = new User({
        username,
        email,
        password,
        wallet
    });

    let _user = await user.save();
    let token = getToken(_user);
    if (_user) {
        return res.status(200).json({
            response: message(true, "Se ha registrado correctamente"),
            token
        });
    }

    return res.status(400).json(false, "Ha ocurrido un error interno");
}

module.exports =  userController;