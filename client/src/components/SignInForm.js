import React, {Component} from 'react';
import Users from '../models/UserModel';


class SignInForm extends Component {

    handleSubmit = event => {
        event.preventDefault();

        let email= this.refs.email.value;
        let password = this.refs.password.value;

        Users.getUser(email, password)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('user', res.data.email)
            })
            .catch(err => {
                console.log(err);
            })

    }

    render(){
        return(
            <form className='ClassForm' onSubmit={this.handleSubmit}>
                <h2>Sign In</h2>
                <div className='form-group'>
                    <label htmlFor = 'email' > Email address </label>
                    <input type = 'email' className = 'form-control' ref='email'/>
                </div>
                <div className = 'form-group'>
                    <label htmlFor = 'password' > Password </label>
                    <input type = 'password' className = 'form-control' ref = 'password'/>
                </div>
                <button type = 'submit' className = 'btn btn-primary'>
                    Sign in
                </button>
            </form>
        )
    }
}

export default SignInForm;