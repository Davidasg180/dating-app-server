const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);