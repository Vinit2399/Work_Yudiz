const express = require("express");
const { User } = require("../../../models/");

const controller = {}

controller.updateProfile = async (req, res) => {

    try {

        const oUpdate = await User.findOneAndUpdate({
            "Email": req.session.email
        }, {
            $set: {
                "Name": req.body.Name
            }
        });
        console.log("Updated data: ", oUpdate);

        if (!oUpdate) {
            return res.status(404).json({
                message: "Bhura bhool thay!"
            })
        }
        return res.status(200).json({
            message: "Updated"
        })
    } catch (error) {
        log.red("Bhool thay chhe baka!")
    }
}

module.exports = { controller }