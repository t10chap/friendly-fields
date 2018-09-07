let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema ({
    email: String,
    epicName: String,
    password: String,
    platform: String,
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }]
})

let User  = mongoose.model('User', UserSchema);
module.exports = User;