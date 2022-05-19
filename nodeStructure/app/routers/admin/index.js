const controller = require("./lib/controller")
const middlewere=require('./lib/middleware');
const router  = require("express").Router();

router.use("/users",middlewere, controller.user);

module.exports = router;