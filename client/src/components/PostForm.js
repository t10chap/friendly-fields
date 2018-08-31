import React, {Component} from 'react';

class PostForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

    
    }

    render(){
        return(
            <form className='ClassForm' onSubmit={this.handleSubmit}>
                <h2>Build Your Post</h2>
                <div className='form-group'>
                    <label htmlFor='title' > Title </label>
                    <input type='title' className='form-control' name='title'/>
                </div>
                <div className = 'form-group'>
                    <label htmlFor = 'URL' > URL </label>
                    <input type='url' className='form-control' name='url'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='content'> Content </label>
                    <input type='text' className='form-control' name='content'/>
                </div>
                <button type='submit' className='btn btn-primary'>
                    Post your post
                </button>
            </form>
        )
    }
}