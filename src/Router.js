import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/Login'
import About from './components/Listing'
import Austin from './components/State'
import Login from './components/Login'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"


// Write ProtectedRoute function here


const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/austin/:id" component={Austin} />
        </Switch>
    );
};

export default Router;