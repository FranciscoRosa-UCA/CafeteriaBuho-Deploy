const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const DiasSchema = new Schema ({
    nombre: {
        type:String,
        required: true
    }
});

module.exports = Mongoose.model("Dias", DiasSchema);