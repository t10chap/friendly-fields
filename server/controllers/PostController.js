let db = require("../models");

// GET api/posts

const getPosts = (req, res) => {
    db.Post.find({}, (err, allPosts) => {
        if(err) {
            return err;
        }
        res.json(allPosts);
    })
}

// POST api/posts/create

const createPost = (req, res) => {
    db.Post.create(req.body, (err, newPost) => {
        if(err) {
            return err;
        }
        res.json(newPost);
    })
}

// PUT api/posts/edit

const editPost = (req, res) => {
    let postId = req.body._id;
    let update = req.body;

    db.Post.findByIdAndUpdate(
        postId, 
        update, 
        {new: true}, 
        (err, updatedPost) => {
            if(err){
                return err;
            }
            return res.status(200).json(updatedPost);
    });
};

// DELETE api/posts/delete

const deletePost = (req, res) => {
    let postId = req.params.postId;
    db.Post.findByIdAndRemove(postId, (err, foundPost) => {
        if(err) {
            return err;
        }else{
            res.status(200).json(foundPost);
        }
    })
}

module.exports = {
    getPosts: getPosts,
    createPost: createPost,
    editPost: editPost,
    deletePost: deletePost,
}