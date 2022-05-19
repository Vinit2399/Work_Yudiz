const { User } = require("../../../models/");
const jwt = require('jsonwebtoken')


middlewere = async (req, res) => {
    let token = req.session.token;
    let decoded = await jwt.decode(token);
    console.log(decoded);
}
module.exports = middlewere;