const bcrypt = require('bcrypt');
const debug = require('debug')('app:user-controller');
const jwt = require('jsonwebtoken');
const { getWalletID, message, getToken, validateToken } = require('../utils/utils');
const User = require('../models/User.model');
const userController = {}; 


userController.getById = async (req, res) => {
    return res.status(200).json(res.user);
}

userController.getByEmail = async (req, res) => {
    let { token } = req.body;
    try {
        let payload = validateToken(token);
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
    try {
        const user = await User.findOne({email});
        let match = false;
        if (user) {
            match = await bcrypt.compare(password, user.password);
            if (match) {
                const token = getToken(user);
                user.tokens = [...user.tokens.filter(_token => validateToken(_token)), token];
                await user.save();
                return res.status(200).json({response: message(true, 'Ha iniciado sesión correctamente'), token});
            }
            else
                return res.status(401).json(message(false, 'Credenciales erróneas'));
        }

    } catch(e) {
        debug(e);
        return res.status(500).json(message(false, 'Error interno'));
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

    try {
        let _user = await user.save();
        let token = getToken(_user);
        _user.tokens.push(token);
        await _user.save();
        if (_user) {
            return res.status(200).json({
                response: message(true, "Se ha registrado correctamente"),
                token
            });
        }
        return res.status(400).json(message(false, "Ha ocurrido un error interno"));
    } catch(e) {
        return res.status(500).json(message(false, 'Error interno'));
    }

}

userController.update = async (req, res) => {
    let {token} = req.body;
    let payload = validateToken(token);
    try {
        if (payload) {  
            let email = payload.data.email;
            let newUser = {
                username: req.body.username || null,
                foto: res.foto || null,
                institucion: req.body.institucion || null
            };
            await User.findOneAndUpdate({email}, newUser);
            res.status(200).json(message(true, 'Usuario actualizado exitosamente'));
        } else {
            res.status(400).json(message(false, 'Credenciales erróneas'));
        }
    } catch (e) {
        res.status(500).json(message(false, 'Error interno'));
    }
    return;
}

module.exports =  userController;