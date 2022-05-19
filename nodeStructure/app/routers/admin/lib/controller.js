const { User } = require("../../../models/");

const controller = {}

controller.user = async (req, res) => {
    const oData = await User.find();

    return res.status(200).json({
        message: "Data found",
        data: oData
    });
}

module.exports = controller;