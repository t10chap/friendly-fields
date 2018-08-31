import React, {Component} from 'react';
import Graph from '../components/Graph';
import {Link} from 'react-router-dom';


class HomepageContainer extends Component {

    render(){

        console.log("IN HOMEPAGE CONTAINER", this.props)
        return(
            <div className="homepage">
                <Link to="/">
                    <button onClick={this.props.logout} path="/">Logout</button>
                </Link>
                <Graph username={this.props.username} id={this.props.id} />
            </div>
        )
    }
}

export default HomepageContainer;