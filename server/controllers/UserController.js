let db = require("../models");

// GET api/users

const getUsers = (req, res) => {
    db.User.find({}, (err, users) => {
        if (err) {
            return err;
        }
        res.json(users);
    })
}

// GET api/users/find

const getUser = (req, res) => {
    db.User.findOne({email: req.params.user_email}, (err, foundUser) => {
        if (err) {
            return err;
        }
        res.json(foundUser);
    })
}

// GET api/users/friends

const getFriends = (req, res) => {
    db.User.find(req.params.id, (err, friends) => {
        if(err){
            console.log(err);
            return err;
        } else{
            console.log(friends);
            res.json(friends);
        }
    })
}

// POST api/users/create

const createUser = (req, res) => {
    db.User.findOne({email: req.body.email}, (err, user) => {
        if (err){
            return err;
        }
        if (user){
            res.status(400).send('user already exists');
        } else{
            db.User.create(req.body, (err, user) => {
                if (err) {
                    return err;
                }
                res.json(user);
            })
        }
    })
}

// POST api/users/friends/add/:id

const addFriend = (req, res) => {
    // console.log("req.params: ", req.params)
    db.User.findById(req.params.id, (err, user) => {
        console.log("req.params: ", req.params)
        if(err){
            console.log(err);
            return err;
        } else if(user){
            db.User.findOne(req.body, (err, friend) => {
                // console.log("req.body: ", req.body)
                if(err){
                    console.log(err);
                    return err;
                }else if(friend){
                     if(user.friends.indexOf(friend._id) > -1){
                        res.status(400).send('Friend already added')
                    }
                    else{
                        user.friends.push(friend._id)
                        user.save()
                        res.status(200).json(user)
                    }
                }
            })
        } else{
            res.status(404).send('User not found')
        }
    })
}

module.exports = {
    getAll: getUsers,
    createUser: createUser,
    getUser: getUser,
    getFriends: getFriends,
    addFriend: addFriend,
}