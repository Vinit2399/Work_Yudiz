const router = require("express").Router();
const middleware=require('./lib/middleware');
const { controller } = require("./lib/controller");

router.put("/updateprofile",middleware, controller.updateProfile);

module.exports = router;