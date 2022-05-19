const mongoose = require("mongoose");

let registerSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true,
        unique: true
    },
    Email: {
        type: String,
        required: true,
        unique: true

    },
    Password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("rgisterData", registerSchema);

module.exports = {User}
