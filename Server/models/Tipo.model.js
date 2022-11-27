const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const TipoSchema = new Schema({
    nombre: {
        type:String,
        required:true,
    }
}, { timestamps: true });

module.exports = Mongoose.model("Tipo", TipoSchema);