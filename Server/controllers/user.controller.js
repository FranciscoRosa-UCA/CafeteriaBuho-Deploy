const bcrypt = require('bcrypt');
const userData = require('../test/users.data');
const { getWalletID, message } = require('../utils/utils');
const User = require('../models/User.model');
const userController = {}; 

userController.getById = async (req, res) => {
    let { id } = req.params;
    //
    // const salRouds = 10;
    // const salt = await bcrypt.genSalt(salRouds);
    // const hash = await bcrypt.hash('password', salt);
    // const hash2 = await bcrypt.hash('root', salt);
    // const hash3 = await bcrypt.hash('hola123', salt);

    return res.status(200).json({ });
}

userController.login = async(req, res) => {
    const { email, password } = req.body;
    // buscar persona en la base y comprobar si coincide su contraseña
    const user = userData.find(user => user.email === email);
    let match = false;

    if (user) {
        match = await bcrypt.compare(password, user.password);
    }

    if (match)
        res.status(200).json(
            {
                username : user.username,
                photo: user.photo
            }
        );
    else
        res.status(400).json({error: "Credenciales erróneas"});
    return;
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
        password
    } = req.body;
    let qr = getWalletID(email);
    // hacer hash al password
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);

    let _user = await User.save({
        username,
        email,
        password,
        wallet: {
            qr,
            ucoins: 0.00,
        }
    });

    if (_user)
        return res.status(200).json(message(true, "Se ha registrado correctamente"));

    return res.status(400).json(false, "Ha ocurrido un error interno");
}

module.exports =  userController;