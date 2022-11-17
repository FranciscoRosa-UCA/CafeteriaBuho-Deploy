const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const CompraSchema = new Schema ({
    email: {
        type:String,
        trim:true,
        required: true
    },
    productos: {
        type: [String],
        required: true,
    }
});

module.exports = Mongoose.model("Compra", CompraSchema);
