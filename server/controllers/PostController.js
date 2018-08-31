let db = require("../models");

// GET api/posts

const getPosts = (req, res) => {
    db.Posts.find({}, (err, allPosts) => {
        if(err) {
            console.log(err);
            return err;
        }
        console.log(allPosts);
        res.json(allPosts);
    })
}

// POST api/posts/create

const createPosts = (req, res) => {
    db.Posts.find({}, (err, newPost) => {
        if(err) {
            console.log(err);
            return err;
        }
        console.log(newPost);
        res.json(newPost);
    })
}

module.exports = {
    getPosts: getPosts,
    createPosts: createPosts,
}