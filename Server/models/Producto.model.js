const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const ProductoSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
        required: true,
    },
    precio: {
        type: Number,
        required: true
    },
    dias: {
        type: [String],
        required: true
    },
    categoria: {
        type: String,
        default: "",
    },
    tipo: {
        type: String,
        required: true
    },
    anidados: {
        type: [Object],
        default: null,
    },
    descripcion: {
        type: String,
        trim: true
    },
    imagen: {
        type: String
    },
    destacado: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

module.exports = Mongoose.model("Producto", ProductoSchema);