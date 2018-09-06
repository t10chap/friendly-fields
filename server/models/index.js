const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/friendlyFields",
    { useNewUrlParser: true }
);

let Users = require("./UserModel");
let Posts = require("./PostModel");

module.exports = {
    User: Users,
    Post: Posts,
}