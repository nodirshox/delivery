var mongoose = require("mongoose");

var CategorySchema = new mongoose.Schema({
    title: {
        uz: {
            type: String,
            require: true
        },
        ru: {
            type: String,
            require: true
        },
    },
});

module.exports = mongoose.model('Category', CategorySchema);