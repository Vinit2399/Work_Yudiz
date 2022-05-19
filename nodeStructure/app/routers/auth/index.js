const authRouter = require("express").Router();
const { controller } = require("./lib/controllers");

authRouter.post("/signup", controller.signup);

authRouter.post("/login", controller.login);

module.exports = { authRouter };