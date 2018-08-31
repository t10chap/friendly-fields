import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import MyRoutes from './config/routes';

class App extends Component {

  state = {
    username: '',
    id: '',
    epicId: '',
  }

  componentDidMount = () => {
    if (localStorage.getItem('user') === null) {
      this.setState({
        username: '',
        id: '',
        epicId: ''
      })
    } else {
      this.setState({
        username: localStorage.getItem('user'),
        id: localStorage.getItem('userId'),
        epicId: localStorage.getItem('epicId')
      })
    }
  }

  login = (username, id) => {
    this.setState({
      username: username,
      id: id,
    })
  }

  logout = () => {
    this.setState({
      username: '',
      id: '',
    })
    localStorage.setItem('user', '');
    localStorage.setItem('userId', '');
    localStorage.setItem('epicId', '');
    localStorage.setItem('epicName', '');
  }

  render() {

    console.log("In App", this.state.username)
    console.log("In App", this.state.id)
    return (
      <div className="App">
        <MyRoutes username={this.state.username} id={this.state.id} login={this.login} logout={this.logout} />
      </div>
    );
  }
}

export default withRouter(App);
