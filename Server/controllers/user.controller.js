const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getWalletID, message } = require('../utils/utils');
const User = require('../models/User.model');
const userController = {}; 

const getToken = (user) => {
    const token = jwt.sign({
        data: {email: user.email, username: user.username, role: user.rol}
    }, process.env.TOKEN, { expiresIn: '24h' })
    return token;
}

userController.getById = async (req, res) => {
    let { id } = req.params;
    return res.status(200).json({ });
}

userController.login = async(req, res) => {
    const { email, password } = req.body;
    // buscar persona en la base y comprobar si coincide su contraseña
    const user = await User.findOne({email});
    let match = false;
    if (user) {
        match = await bcrypt.compare(password, user.password);
        if (match) {
            const token = jwt.sign({
                    data: {email: user.email, username: user.username}
                }, process.env.TOKEN, { expiresIn: '24h' })
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