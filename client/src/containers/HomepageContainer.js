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
        open: false,
        friends: []
    }

    handleClick = () => {
        this.setState({open: !this.state.open})
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
        console.log("FRIENDS LISTS", this.state.friends)
        return(
            <div className="homepage">
                <Scrollbars style={{ width: 300, height: 726 }}>
                    <News />
                </Scrollbars>
                <Scrollbars style={{ width: 500, height: 726 }}>
                    <Posts id={this.props.id} />
                </Scrollbars>
                    <div className="right">
                        <Link to="/">
                            <button className="rightBtns" onClick={this.props.logout} path="/">Logout</button>
                        </Link>
                        <Popup trigger={<button className="rightBtns">Add Friend</button>} modal onClose={this.closeModal}>
                            {close=>(
                                <div className="modal">
                                    <a className="modalClose" onClick={() => {close()}}>&times;</a>
                                    <Friends id={this.props.id} friends={this.state.friends} addFriend={this.addFriend} />
                                </div>
                            )}
                        </Popup>
                        <Link to="/profile">
                            <button className="rightBtns" path="/profile">Profile</button>
                        </Link>
                    <Graph username={this.props.username} id={this.props.id} platform={this.props.platform} />
                    <Scrollbars className="rightScroll" style={{ width: 320, height: 451 }}>
                        <Shop />
                    </Scrollbars>
                </div>
            </div>
        )
    }
}

export default HomepageContainer;