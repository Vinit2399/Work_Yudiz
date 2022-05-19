const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true

    },
    image: {
        type: String,
        required: true
    },
    walletAddress: {
        type: String,
        required: true
    },
    imageUri: {
        type: String,
        required: true
    },
    jsonURI: {
        type: String,
        required: true
    }
});

const Nfts = mongoose.model("data", schema);

module.exports = {Nfts}