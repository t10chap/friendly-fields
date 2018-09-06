import React, {Component} from 'react';
import Graph from '../components/Graph';
import {Link} from 'react-router-dom';
import PostModel from '../models/PostModel';
import UserModel from '../models/UserModel';
import Posts from '../components/Posts';
import Popup from 'reactjs-popup';
import Friends from '../components/Friends';

class HomepageContainer extends Component {

    state = {
        friends: []
    }

    componentDidMount = () => {
        let users = [];
        UserModel.all()
        .then(res => {
            this.setState({
                friends: res.data
            })
        })
    }

    addFriend = (newFriendsList) => {
        this.setState({friends: newFriendsList})
    }

    render(){
        return(
            <div className="homepage">
                <Link to="/">
                    <button onClick={this.props.logout} path="/">Logout</button>
                </Link>
                <Posts id={this.props.id} />
                <Graph username={this.props.username} id={this.props.id} />
                <Popup trigger={<button>Add Friend</button>} modal onClose={this.closeModal}>
                    {close=>(
                        <div className="modal">
                            <a onClick={() => {close()}}>&times;</a>
                            <Friends id={this.props.id} friends={this.state.friends} addFriend={this.addFriend} />
                        </div>
                    )}
                </Popup>
            </div>
        )
    }
}

export default HomepageContainer;