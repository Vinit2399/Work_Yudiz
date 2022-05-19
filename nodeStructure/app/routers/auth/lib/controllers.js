const { User } = require("../../../models/");
const validator = require("./validators")
const { mongoDb } = require("../../../utils/");
const jwt = require('jsonwebtoken')
const express = require("express");
const session = require("express-session")
require("dotenv").config();

const controller = {}

controller.signup = async (req, res) => {
    console.log("bodyy : ", req.body);

    let aRequiredData = []

    if (!req.body.Name) {
        aRequiredData.push("Name")
    }

    if (!req.body.UserName) {
        aRequiredData.push("Username")
    }

    if (!req.body.Email) {
        aRequiredData.push("Email")
    }

    if (!req.body.Password) {
        aRequiredData.push("Password")
    }

    if (aRequiredData.length) {
        return res.status(200).json({
            message: "Required field: " + aRequiredData.join(", ")
        });
    }

    if (!validator.isEmailvalid(req.body.Email)) {
        return res.status(200).json({
            message: "Email is not valid formate!"
        })
    }

    let oRegisteredUser = new User({
        Name: req.body.Name,
        UserName: req.body.UserName,
        Email: req.body.Email,
        Password: req.body.Password
    })
    console.log("data : ", oRegisteredUser);

    await oRegisteredUser.save();
    console.log("Data Saved");

    return res.status(200).json({
        message: "Registered Successfully"
    })
}

controller.login = async (req, res) => {

    aCheckEmptyfiled = [];

    if (!req.body.UserName) {
        aCheckEmptyfiled.push("Username")
    }

    if (!req.body.Password) {
        aCheckEmptyfiled.push("Password")
    }

    if (aCheckEmptyfiled.length) {
        return res.status(200).json({
            message: "Required " + aCheckEmptyfiled.join(", ")
        })
    }

    const verifyUser = await User.findOne({
        UserName: req.body.UserName
    });

    if (req.body.Password != verifyUser.Password) {
        return res.status(400).json({
            "msg": "Incorrect password"
        })
    }

    if (verifyUser.Email == undefined) {
        return res.status(404).json({
            message: "user not Found"
        })
    }

    console.log(process.env.SECRET_KEY);

    var token = await jwt.sign({
        email: verifyUser.Email,
    }, process.env.SECRET_KEY, {
        expiresIn: "1h"
    });

    console.log(token);
    // req.session["token"] = token;
    req.session["email"] = verifyUser.Email;
    // req.session["username"]=verifyUser.username;
    console.log(req.session);


    return res.status(200).json({
        message: "Successfully logged in!",
        token: token
    })

}

module.exports = { controller };
