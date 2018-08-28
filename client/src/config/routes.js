import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingContainer from '../containers/LandingContainer';

const routes = (props) => {
    return (
        <Switch>
          <Route exact path='/' component={LandingContainer} />
        </Switch>
    )
}

export default routes;