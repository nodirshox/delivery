var mongoose = require("mongoose");
var Types = mongoose.Types;

var OrderSchema = new mongoose.Schema({
    user: {
        type: Types.ObjectId,
        ref: 'User',
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['process', 'finish', 'cancel'],
        default: 'process',
    },
    product: {
        product: {
            type: Types.ObjectId,
            ref: 'Product',
        },
        quantity: {
            type: Number,
        },
        price: {
            type: Number,
        },
    },
});

module.exports = mongoose.model('Order', OrderSchema);