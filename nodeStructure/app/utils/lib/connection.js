const mongoose = require("mongoose");

function mongoDb() {
}
mongoDb.prototype.initialize = async function () {
    mongoose.connect("mongodb://localhost:27017/User", {
        useNewUrlParser: true,

    }).then(() => {
        console.log("Mongo connection Established!");
    }).catch((e) => {

        console.log(e);
    })

}


module.exports = new mongoDb();