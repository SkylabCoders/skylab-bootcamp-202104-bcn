import react from 'react'

import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Heroes} from "../../pages/Heroes/Heroes";
import {Dashboard} from "../../pages/Dashboard/dashboard";

export const Routing = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/Heroes">Heroes</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/Dashboard" component={Dashboard}>
                    </Route>
                    <Route exact path="/Heroes" component={Heroes}>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
