import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default ()=>{
    return(
        <Router>
            <div>
                <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/users">Users</Link>
                    </li>
                </ul>
                </nav>

                <Switch>
                    <Route path="/about">
                        <div>about</div>
                    </Route>
                    <Route path="/users">
                        <div>user</div>
                    </Route>
                    <Route path="/">
                        <div>home</div>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
};
