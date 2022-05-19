const express = require("express");
const app = express();
// const User = require("./models/schema");
// require("./db/conn");
const bodyParser = require('body-parser');
const session = require("express-session")
app.use(bodyParser.json())
// const route = require("./routes");
const port = process.env.PORT || 3000;
const { router } = require("./routes");
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
//app.use(express.json());

function connection() {

}

connection.prototype.initialize = function () {
    app.use(
        session({
            secret: "secret-key",
            resave: false,
            saveUninitialized: false,
            cookie: {
                expires: 600000,
            },
        })
    );
    app.listen(port, () => {
        app.use("/api/v1", router);
        console.log(`server is running on ${port}`);
    })
}

module.exports = new connection();

