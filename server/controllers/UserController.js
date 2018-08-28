let db = require("./models");

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

// POST api/user/

const createUser = (req, res) => {
    console.log(req.body)

    db.User.fineOne({email: req.body.email}, (err, user) => {
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
}