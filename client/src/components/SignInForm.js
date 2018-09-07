import React, {Component} from 'react';
import Users from '../models/UserModel';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class SignInForm extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        let AuthStr = 'de190c1c8f31a915f6d050faf2cd7176';
        var formData = new FormData();

        var userData = {
            email: this.state.email,
        }

        Users.getUser(userData.email)
            .then(res => {
                localStorage.setItem('user', userData.email)
                localStorage.setItem('epicName', res.data.epicName);
                localStorage.setItem('userId', res.data._id);
                localStorage.setItem('platform', res.data.platform)
                formData.append("username", res.data.epicName);
                axios.post('https://fortnite-public-api.theapinetwork.com/prod09/users/id',
                    formData,
                    { 
                        headers: { Authorization: AuthStr } 
                    }
                )
                .then(FortniteRes => {
                    localStorage.setItem('epicId', FortniteRes.data.uid);
                    this.props.login(FortniteRes.data.username, res.data._id);
                    this.props.history.push('/homepage');
                })
            })
            .catch(err => {
                console.log(err);
            })

    }

    render(){
        return(
            <form className='classForm' onSubmit={this.handleSubmit}>
                <h2>Sign In</h2>
                <div className='form-group'>
                    <label htmlFor='email' > Email address </label>
                    <input onChange={this.handleChange} type='email' className='form-control email' name='email'/>
                </div>
                <div className = 'form-group'>
                    <label htmlFor = 'password' > Password </label>
                    <input onChange={this.handleChange} type='password' className='form-control' name='password'/>
                </div>
                <button type='submit' className='btn btn-primary'>
                    Sign in
                </button>
            </form>
        )
    }
}

export default withRouter(SignInForm);