const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const CategoriaSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
        required: true,
    },
});

module.exports = Mongoose.model("Categoria", CategoriaSchema);