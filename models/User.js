var mongoose = require("mongoose");
var Types = mongoose.Types;

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "",
    },
    telegram_id: {
        type: Number,
        required: true,
        unique: true,
    },
    phone_number: {
        type: String,
        default: "",
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    cart: [
        {
            product: {
                type: Types.ObjectId,
                ref: 'Product',
            },
            quantity: {
                type: Number,
                min: 0,
            },
        },
    ],
});

module.exports = mongoose.model('User', UserSchema);