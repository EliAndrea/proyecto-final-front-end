import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/home.js';
import Day from './views/day.js';
import Workers from './views/workers.js';
import UserDay from './views/user-day.js';
import ThemeProvider from "./context/themeProvider.js";
import Login from "./views/login.js";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="App">
                    {/*<Route path="/" exact component={Login} />*/}
                    <Switch>
                        <Route path="/admin/home/" component={Home} />
                        <Route path="/admin/workers/" component={Workers} />
                        <Route path="/admin/day" component={Day} />
                        <Route path="/user/day" component={UserDay} />
                    </Switch>
                    {/*<Route path="/user/home/" component={HomeUser} />
                    <Route path="/user/change/" component={Change} />*/}
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;