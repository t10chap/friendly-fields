import React, {Component} from 'react';
import Users from '../models/UserModel';


class SignUpForm extends Component {

    handleSubmit = event => {
        event.preventDefault();

        let user = {
            email: this.refs.email.value,
            epicName: this.refs.epic.value,
            password: this.refs.password.value,
        }

        Users.createUser(user)
            .then(response => {
                console.log(response)
                if (response) {
                    localStorage.setItem('user', response.data.email)
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

export default SignUpForm;