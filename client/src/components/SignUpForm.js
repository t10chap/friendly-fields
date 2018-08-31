import React, {Component} from 'react';
import Users from '../models/UserModel';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';


class SignUpForm extends Component {

    handleSubmit = event => {
        event.preventDefault();

        let user = {
            email: this.refs.email.value,
            epicName: this.refs.epic.value,
            password: this.refs.password.value,
        }

        let AuthStr = 'de190c1c8f31a915f6d050faf2cd7176';
        var userData = new FormData();

        console.log(this.props)

        Users.createUser(user)
            .then(res => {
                console.log(res)
                if (res) {
                    userData.set('username', res.data.epicName);
                    localStorage.setItem('user', userData.email)
                    localStorage.setItem('epicName', res.data.epicName);
                    localStorage.setItem('userId', res.data._id);
                    axios.post('https://fortnite-public-api.theapinetwork.com/prod09/users/id',
                        userData,
                        { 
                            headers: { Authorization: AuthStr } 
                        }
                    )
                    .then(res => {
                        console.log("In Success", res.data);
                        localStorage.setItem('epicId', res.data.uid);
                        this.props.login(res.data.username, res.data.uid);
                        this.props.history.push('/homepage');
                    })
                }
                else{
                    console.log("User not found")
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    render(){
        return(
            <form className='ClassForm' onSubmit={this.handleSubmit}>
                <h2>Sign Up</h2>
                <div className='form-group'>
                    <label htmlFor = 'email' > Email address </label>
                    <input type = 'email' className = 'form-control' ref='email'/>
                </div>
                <div className='form-group'>
                    <label htmlFor = 'text' > Epic Name </label>
                    <input type = 'text' className = 'form-control' ref='epic'/>
                </div>
                <div className = 'form-group'>
                    <label htmlFor = 'password' > Password </label>
                    <input type = 'password' className = 'form-control' ref = 'password'/>
                </div>
                <div className = 'form-group'>
                    <label htmlFor = 'password' > Confirm Password </label>
                    <input type = 'password' className = 'form-control' ref = 'confirmpassword'/>
                </div>
                <button type = 'submit' className = 'btn btn-primary'>
                    Sign up
                </button>
            </form>
        )
    }
}

export default withRouter(SignUpForm);