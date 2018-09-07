import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Plot from 'react-plotly.js';
import Graph from './Graph';
import PostModel from '../models/PostModel';
import UserModel from '../models/UserModel';

class Profile extends Component {

    state = {
        username: "",
        epicName: "",
        totalKills: "",
        soloKills: "",
        duoKills: "",
        squadKills: "",
        totalWins: "",
        sololWins: "",
        duoWins: "",
        squadWins: "",
    }

    componentDidMount = () => {
        let authStr = 'de190c1c8f31a915f6d050faf2cd7176';
        var userData = new FormData();
        userData.set('user_id', localStorage.getItem('epicId'));
        userData.set('platform', localStorage.getItem('platform'));
        userData.set('window', 'alltime')
        axios.post('https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats',
        userData,
        { 
            headers: { Authorization: authStr } 
        }
        )
        .then(res => {
            console.log(res);
            this.setState({
                    username: localStorage.getItem('user'),
                    epicName: localStorage.getItem('epicName'),
                    totalKills: res.data.totals.kills,
                    soloKills: res.data.stats.kills_solo,
                    duoKills: res.data.stats.kills_duo,
                    squadKills: res.data.stats.kills_squad,
                    totalWins: res.data.totals.wins,
                    soloWins: res.data.stats.placetop1_solo,
                    duoWins: res.data.stats.placetop1_duo,
                    squadWins: res.data.stats.placetop1_squad,
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
        return(
            <div className="profile">
                <Link className="homeBtn" to="/homepage">
                   <button className="home" path="/homepage">Back To Main Page</button>
                </Link>
                <div className="userStats">
                    <h1 className="names" >Email: {this.state.username}</h1>
                    <h1>Epic Name: {this.state.epicName}</h1>
                    <span className="stats">
                        <h1>Wins:</h1>
                        <div className="wordNumb">
                            <h3>{this.state.totalWins}</h3>
                            <p>Total</p>
                        </div>
                        <div className="wordNumb">
                            <h3>{this.state.soloWins}</h3>
                            <p>Solo</p>
                        </div>
                        <div className="wordNumb">
                            <h3>{this.state.duoWins}</h3>
                            <p>Duo</p>
                        </div>
                        <div className="wordNumb">
                            <h3>{this.state.squadWins}</h3>
                            <p>Sqauds</p>
                        </div>
                    </span>
                    <span className="stats">
                        <h1>Kills:</h1>
                        <div className="wordNumb">
                            <h3>{this.state.totalKills}</h3>
                            <p>Total</p>
                        </div>
                        <div className="wordNumb">
                            <h3>{this.state.soloKills}</h3>
                            <p>Solo</p>
                        </div>
                        <div className="wordNumb">
                            <h3>{this.state.duoKills}</h3>
                            <p>Duo</p>
                        </div>
                        <div className="wordNumb">
                            <h3>{this.state.squadKills}</h3>
                            <p>Sqauds</p>
                        </div>
                    </span>
                    <div className="profileGraph">
                        <Graph username={this.props.username} id={this.props.id} platform={this.props.platform} />
                    </div>
                </div>
                <div className="userFriends">

                </div>
            </div>
        )
    }
}

export default Profile;