import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingContainer from '../containers/LandingContainer';
import HomepageContainer from '../containers/HomepageContainer';
import Profile from '../components/Profile';

const routes = (props) => {

    console.log("ROUTE PROPS", props)
    return (
        <Switch>
            <Route exact path='/'
                render = { () => 
                    <LandingContainer 
                        {...props}
                        login={props.login}
                    />
                }
            />
            <Route path='/homepage' 
                render = { () => 
                    <HomepageContainer 
                        logout={props.logout}
                        username={props.username}
                        id={props.id}
                        platform={props.platform}
                    />
                }
            />
            <Route path='/profile'
                render = { () => 
                    <Profile 
                        username={props.username}
                        id={props.id}
                        platform={props.platform}
                    />
                }
            />
        </Switch>
    )
}

export default routes;