var mongoose = require("mongoose");
var Types = mongoose.Types;

var OrderSchema = new mongoose.Schema({
    user: {
        type: Types.ObjectId,
        ref: 'User',
    },
    status: {
        type: String,
        enum: ['process', 'delivering', 'finish', 'cancel'],
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
    detail: {
        type: String,
        default: ""
    },
    created_at: {
        type: Date,
        default: Date.now,
    },,
    updated_at: {
        type: Date
    }
});

module.exports = mongoose.model('Order', OrderSchema);