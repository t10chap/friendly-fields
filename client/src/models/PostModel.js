import React from 'react';
import axios from 'axios';

class PostModel {
    
    static all(){
        let request = axios.get("http://localhost:4000/api/posts");
        return request;
    }

    static createPost(newPost){
        let request = axios.post("http://localhost:4000/api/posts/create", newPost);
        return request;
    }

    static editPost(post){
        let request = axios.put("http://localhost:4000/api/posts/edit", post);
        return request;
    }

    static deletePost(postId){
        let request = axios.delete("http://localhost:4000/api/posts/delete/"+postId);
        return request;
    }
}

export default PostModel;