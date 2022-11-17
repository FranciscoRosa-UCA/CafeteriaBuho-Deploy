const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const WalletSchema = new Schema({
    ucoins: {
        type: Number,
        required: true,
        default: 0.00
    },
    qr: {
        type: String,
        required: true,
    }
}, {timestamps: true});

module.exports = Mongoose.model("Wallet", WalletSchema);