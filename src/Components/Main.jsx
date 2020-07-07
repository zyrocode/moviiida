import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fade } from 'reactstrap'
import Login from './Login'
import Events from './Events';
import Dashboard from './Dashboard';

class Main extends Component {
    state = {}
    render() {
        return (
            <Router>
                <Fade>
                    <Switch>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/events" exact component={Events}/>
                        <Route path="/dashboard" exact component={Dashboard}/>
                    </Switch>
                </Fade>
            </Router>
        );
    }
}

export default Main;