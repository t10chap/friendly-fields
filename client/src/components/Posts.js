import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import PostForm from './PostForm';
import Post from './Post';
import PostModel from '../models/PostModel';

class Posts extends Component {
    state = {
        posts: [],
        postTitle: "",
        postContent: "",
    }

    componentDidMount = () => {
        PostModel.all()
            .then(res => {
                this.setState({posts: res.data})
            })
    }

    create = (newPost) => {
        // console.log("IN CREATE", newPost)
        PostModel.createPost(newPost)
        .then(res => {
            // console.log("CREATE RES", res);
            let newPostList = [ ...this.state.posts, res.data];
            // console.log("New Post List", newPostList);
            this.setState({posts: newPostList})
        })
        .catch(err => {
            console.log(err);
        })
    }

    edit = (post) => {
        PostModel.editPost(post)
        .then(res => {
            let posts = this.state.posts;
            var foundIndex = posts.findIndex(x => x._id == res.data._id);
            posts[foundIndex] = res.data;
            this.setState({
                posts: posts
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    delete = (postId) => {
        PostModel.deletePost(postId)
        .then(res => {
            // console.log("DELETE POST RESPONSE", res);
            let posts = this.state.posts;
            var foundIndex = posts.findIndex(x => x._id == res.data._id);
            posts.splice(foundIndex, 1);
            this.setState({posts: posts})
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
        // console.log("AUYYYOOOOOO", this.state.posts)
        let postArr = this.state.posts.map(post => {
            return(
                <Post post={post} key={post._id} userId={this.props.id} edit={this.edit} delete={this.delete} />
            )
        })

        return(
                <div className="postWrap">
                    {postArr}
                    <Popup trigger={<button>Create Post</button>} modal onClose={this.closeModal}>
                        {close=>(
                            <div className="modal">
                                <a onClick={() => {close()}}>&times;</a>
                                <PostForm create={this.create} posts={this.state.posts} id={this.props.id} close={close}/>
                            </div>
                        )}
                    </Popup>
                </div>
        ) 
    }
}

export default Posts;