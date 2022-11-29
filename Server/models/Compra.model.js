const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const ListaProductos = new Schema({
    id: {
        type: String,
        required:true
    },
    cantidad: {
        type: Number,
        require: true,
    }
});
const CompraSchema = new Schema ({
    email: {
        type:String,
        trim:true,
        required: true
    },
    productos: {
        type: [ListaProductos],
        required: true,
    },
    total: {
        type: Number,
        required: true,
    }
});

module.exports = Mongoose.model("Compra", CompraSchema);
