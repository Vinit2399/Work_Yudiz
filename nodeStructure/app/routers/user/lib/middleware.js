const { User } = require("../../../models/");
const jwt = require('jsonwebtoken');
const session = require("express-session");
require("dotenv").config();


middlewere = async (req, res, next) => {
    let barer = req.headers.authorization;
    // console.log(barer);
    let token = barer.replace("Bearer ", "");
    console.log(token);

    let decoded = jwt.verify(token, process.env.SECRET_KEY );
    console.log("Decodes", decoded);

    if (decoded.email != req.session.email) {
        return res.status(400).send("Unauthorized");
    }
    next();

}
module.exports = middlewere;