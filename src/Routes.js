import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";

//Dashboard
import Login from "./components/login/Login";
import history from "./history";


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        )
    }
}