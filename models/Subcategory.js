var mongoose = require("mongoose");
var Types = mongoose.Types;

var SubcategorySchema = new mongoose.Schema({
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
    category: {
        type: Types.ObjectId,
        ref: 'Category',
    },
});

module.exports = mongoose.model('Subcategory', SubcategorySchema);