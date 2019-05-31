import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/home.js';
import Workers from './views/workers.js';
import Day from './views/day.js';
import ThemeProvider from "./context/themeProvider.js";
import Password from "./views/password.js";
import Email from "./views/cambioemail.js";
import Login from "./views/login.js";
import Profile from './views/profile.js';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="App">
                    <Switch>
                    <Route path="/" exact component={Login} />
                        <Route path="/home/" component={Home} />
                        <Route path="/workers/" component={Workers} />
                        <Route path="/day" component={Day} />
                        <Route path="/profile" exact component={Profile} />
                        <Route path="/password" exact component={Password} />
                        <Route path="/cambioemail" exact component={Email} />
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;