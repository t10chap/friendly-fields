import React, {Component} from 'react';
import Graph from '../components/Graph';
import {Link} from 'react-router-dom';
import UserModel from '../models/UserModel';
import Posts from '../components/Posts';
import Popup from 'reactjs-popup';
import Friends from '../components/Friends';
import { Scrollbars } from 'react-custom-scrollbars';
import News from '../components/News';
import Shop from '../components/Shop';

class HomepageContainer extends Component {

    state = {
        friends: []
    }

    componentDidMount = () => {
        let friendsIds = [];
        let userObject = localStorage.getItem('user');
        
        UserModel.getUser(userObject)
        .then(res => {
            UserModel.all()
            .then(response => {
                let user = res.data;
                let users = response.data;
                let arr = users.filter(ele => ele._id!==user._id)
                this.setState({
                    friends: arr
                })    
            })
        })
    }

    componentDidUpdate = () => {

    }

    addFriend = (newFriendsList) => {
        this.setState({friends: newFriendsList})
    }

    render(){
        return(
            <div className="homepage">
                <Scrollbars style={{ width: 500, height: 700 }}>
                    <News />
                </Scrollbars>
                <Scrollbars style={{ width: 500, height: 720 }}>
                    <Posts id={this.props.id} />
                </Scrollbars>
                <div className="right">
                    <Link to="/">
                        <button className="logoutBtn" onClick={this.props.logout} path="/">Logout</button>
                    </Link>
                    <Popup trigger={<button>Add Friend</button>} modal onClose={this.closeModal}>
                        {close=>(
                            <div className="modal">
                                <a onClick={() => {close()}}>&times;</a>
                                <Friends id={this.props.id} friends={this.state.friends} addFriend={this.addFriend} />
                            </div>
                        )}
                    </Popup>
                    <Graph username={this.props.username} id={this.props.id} platform={this.props.platform} />
                    <Scrollbars style={{ width: 200, height: 400 }}>
                        <Shop />
                    </Scrollbars>
                </div>
            </div>
        )
    }
}

export default HomepageContainer;