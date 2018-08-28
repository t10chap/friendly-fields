let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema ({
    email: String,
    epicName: String,
    password: String,
})

let User  = mongoose.model('User', UserSchema);
module.exports = User;