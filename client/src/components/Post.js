import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import PostModel from '../models/PostModel';

class Post extends Component {

    state = {
        edit: false,
        postId: "",
        post: this.props.post,
        title: this.props.post.title,
        content: this.props.post.content
    }

    handleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    editTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    editContent = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleDelete = () => {
        this.props.delete(this.props.post._id);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let post = {
            _id: this.props.post._id,
            title: this.state.title,
            content: this.state.content,
        }
        this.handleEdit();
        this.props.edit(post);
    }

    render(){
        if(this.state.edit){
            return(
                <div className="entirePost">
                    <h2>{this.state.title}</h2>
                    <p>Edit Title Below:</p>
                    <input value={this.state.title} onChange={this.editTitle} className="edit"/>
                    <h4>{this.state.content}</h4>
                    <p>Edit Content Below:</p>
                    <input value={this.state.content} onChange={this.editContent} className="edit"/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            )
        }else{
            return(
                <div className="entirePost">
                    <h2 >{this.props.post.title}</h2>
                    <a href={this.props.post.url}>{this.props.post.url}</a>
                    <p > {this.props.post.content}</p>
                    {
                        this.props.userId===this.props.post.user
                        ?<button onClick={this.handleEdit}>Edit</button>
                        : null
                    }
                    {
                        this.props.userId===this.props.post.user
                        ?<Popup 
                            trigger={<button>Delete</button>} 
                            position="right center"
                            closeOnDocumentClick
                            onClose={this.closeModal}
                        >
                            {close=>(
                                <div>
                                    <h3>Are you sure you want to delete this post?</h3>
                                    <button onClick={this.handleDelete}>Yes (Delete Post)</button>
                                    <button onClick={() => {close()}}>No (Keep Post)</button>
                                </div>
                            )}

                        </Popup>
                        : null
                    }
                </div>
            )
        }
    }
}

export default Post;
