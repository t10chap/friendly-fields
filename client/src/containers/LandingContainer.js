import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

class LandingContainer extends Component {


    render(){

        console.log(this.props)
        return(
            <div className="landingPage">
                <div className="login">
                    <h1>Welcome to Friendly Fields</h1>
                    <h3>You must either to continue:</h3>
                    <div className="authorizeBtns">
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
                    <p className="about">This website allows people to sign-up and share posts with one another! You can link videos pictures within in your posts so you can show off a cool clip of yours or someone elses. Also, within this user space, you can view a few of your own stats on the profile page such as Win ratio, KD Ratio, total wins, total kills, and stuff along those lines. An added bonus to the user space, you can see the upcoming add-ons to the game in the news feed and preview the shop within the shop feed. </p>
                </div>
                <p>&copy; Tevin Rawls</p>
            </div>
        )
    }
}

export default LandingContainer;