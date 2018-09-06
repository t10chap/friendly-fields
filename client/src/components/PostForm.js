import React, {Component} from 'react';
import Popup from 'reactjs-popup';

class PostForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        let newPost = {
            title: this.refs.title.value,
            url: this.refs.url.value,
            content: this.refs.content.value,
            user: this.props.id,
        }
        console.log(newPost)
        this.props.create(newPost)
        this.props.close();
    }

    render(){
        return(
            <form className='ClassForm' onSubmit={this.handleSubmit}>
                <h2>Build Your Post</h2>
                <div className='form-group'>
                    <label htmlFor='title' > Title </label>
                    <input type='title' className='form-control' name='title' ref="title"/>
                </div>
                <div className = 'form-group'>
                    <label htmlFor = 'URL' > URL </label>
                    <input type='url' className='form-control' name='url' ref="url"/>
                </div>
                <div className='form-group'>
                    <label htmlFor='content'> Content </label>
                    <input type='text' className='form-control' name='content' ref="content"/>
                </div>
                <button type='submit' className='btn btn-primary' >
                    Post your post
                </button>
            </form>
        )
    }
}

export default PostForm;