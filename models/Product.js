var mongoose = require("mongoose");
var Types = mongoose.Types;

var ProductSchema = new mongoose.Schema({
    title: {
        uz: {
            type: String,
            require: true,
        },
        ru: {
            type: String,
            require: true,
        },
    },
    description: {
        uz: {
            type: String,
            default: "",
        },
        ru: {
            type: String,
            default: "",
        },
    },
    image: {
        type: String,
        default: "http://files.nodirbek.uz/product.jpg",
    },
    price: {
        type: Number,
        required: true,
        min: 1,
    },
    subcategory: {
        type: Types.ObjectId,
        ref: 'Subcategory',
    },
    type: {
        type: String,
        enum: ['quantity', 'weight', 'packet'],
        default: 'quantity',
    },
    is_active: {
        type: Boolean,
        default: true,
    },
    create_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
    },
});

module.exports = mongoose.model('Product', ProductSchema);