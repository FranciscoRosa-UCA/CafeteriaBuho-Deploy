const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const UserModel = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        default: null,
    },
    telefono: {
        type: String,
        trim: true,
    },
    foto: {
        type: String,
        default: null,
    },
    rol: {
        type: String,
        required: true,
        default: "ROL_USER",
    },
    institucion: {
        type: String,
        default: null
    },
    wallet: {
        qr: {
            type: String,
            required: true,
        },
        ucoins: {
            type: Number,
            required: true,
            default: 0.00
        }
    }
});

module.exports = Mongoose.model("User", UserModel);