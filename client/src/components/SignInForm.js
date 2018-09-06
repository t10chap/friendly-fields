import React, {Component} from 'react';
import Users from '../models/UserModel';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';

class SignInForm extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChange = (event) => {
        // console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
        // console.log(this.state)
    }

    handleSubmit = event => {
        event.preventDefault();

        let AuthStr = 'de190c1c8f31a915f6d050faf2cd7176';
        var formData = new FormData();

        var userData = {
            email: this.state.email,
            password: this.state.password
        }

        Users.getUser(userData)
            .then(res => {
                console.log(res)
                localStorage.setItem('user', userData.email)
                localStorage.setItem('epicName', res.data.epicName);
                localStorage.setItem('userId', res.data._id);
                formData.append("username", res.data.epicName);
                axios.post('https://fortnite-public-api.theapinetwork.com/prod09/users/id',
                    formData,
                    { 
                        headers: { Authorization: AuthStr } 
                    }
                )
                .then(FortniteRes => {
                    console.log("In Success", FortniteRes.data);
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
        console.log('SIGNIN', this.props)
        return(
            <form className='ClassForm' onSubmit={this.handleSubmit}>
                <h2>Sign In</h2>
                <div className='form-group'>
                    <label htmlFor='email' > Email address </label>
                    <input onChange={this.handleChange} type='email' className='form-control' name='email'/>
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