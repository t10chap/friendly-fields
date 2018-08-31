import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

class LandingContainer extends Component {


    render(){

        console.log(this.props)
        return(
            <div className="landingPage">
                <h1>Welcome to Friendly Fields</h1>
                <h3>Please:</h3>
                <Popup trigger={<button> Sign-up</button>} modal>
                    <SignUpForm
                        login={this.props.login}
                    />
                </Popup>
                <Popup trigger={<button> Sign-in</button>} modal>
                    <SignInForm 
                        login={this.props.login}
                    />
                </Popup>
            </div>
        )
    }
}

export default LandingContainer;