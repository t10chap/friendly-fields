let db = require("../models");

// GET api/users

const getUsers = (req, res) => {
    db.User.find({}, (err, users) => {
        if (err) {
            console.log(err);
            return err;
        }
        res.json(users);
    })
}

// GET api/user/find

const getUser = (req, res) => {
    console.log('email',req.params)
    db.User.findOne({email: req.params.user_email}, (err, foundUser) => {
        if (err) {
            console.log(err)
            return err;
        }
        console.log('user', foundUser);
        res.json(foundUser);
    })
}

// POST api/user/

const createUser = (req, res) => {
    db.User.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            console.log(err);
            return err;
        }
        if (user){
            res.status(400).send('user already extists');
        }
        else{
            db.User.create(req.body, (err, user) => {
                if (err) {
                    console.log(err);
                    return err;
                }
                res.json(user);
            })
        }
    })
}

module.exports = {
    getAll: getUsers,
    createUser: createUser,
    getUser: getUser,
}