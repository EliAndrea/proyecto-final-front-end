import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './views/home.js';
import Day from './views/day.js';
import Workers from './views/workers.js';

function App() {
    return (
        <Router>
            <div className="App">
                {/*<ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/admin/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/admin/day">Day</Link>
                    </li>
                    <li>
                        <Link to="/admin/workers">Workers</Link>
                    </li>
                </ul>*/}
                {//<Route path="/" exact component={Login} />
                }
                <Switch>
                <Route path="/admin/home/" component={Home} />
                <Route path="/admin/workers/" component={Workers} />
                <Route path="/admin/day" component={Day} />
                </Switch>
                {/*<Route path="/user/home/" component={HomeUser} />
                <Route path="/user/:id" component={DayUser} />
                <Route path="/user/change/" component={Change} />*/}
            </div>
        </Router>
    );
}

export default App;