const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = process.env.PORT || 3000;
const { mongoDb } = require("./app/utils/")
const connection = require("./app/routers/")

mongoDb.initialize();

connection.initialize();