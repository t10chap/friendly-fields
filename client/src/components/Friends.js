import React, {Component} from 'react';
import UserModel from '../models/UserModel';

class Friends extends Component {

    state = {
        search:'',
        searchList:[],
    }

    searchFriends = (event) => {
        event.preventDefault();
        let arr = this.props.friends.filter(ele => ele.email.includes(event.target.value))
        let temp=[];
        arr.forEach(element => {
            temp.push(element.email)
        });
        this.setState({
            search: event.target.value,
            searchList: temp
        })


    }

    addFriend = (event) => {
        let friendsList = this.props.friends;
        console.log("FRIENDS EMAIL: ", event.target.value);
        UserModel.addFriend(event.target.value, this.props.id)
        .then(res => {
            console.log("ADD-FRIEND RES: ", res);
            friendsList.push(res);
            this.props.addFriend(friendsList);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
        let users = this.state.searchList.map(email => {
            return(
                <div>
                    <h3>{email}</h3>
                    <button onClick={this.addFriend} value={email}>Add Friend</button>
                </div>
            )
        })
        return(
            <div>
                <label>
                    Search Users By Email:
                    <input type="text" name="email" value={this.state.search} onChange={this.searchFriends}/>
                </label>
                <div className="friendResult">
                    <h1>Searched Friends</h1>
                    {users}
                </div>
            </div>
        )
    }
}

export default Friends;