import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThemeProvider from "./context/themeProvider.js";
import LoginView from "./views/login.js";
import Home from './views/home.js';
import Workers from './views/workers.js';
import Day from './views/day.js';
import Menu from './views/menu.js';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="App">
                    <Switch>
                    <Route path="/" exact component={LoginView} />
                        <Route path="/home/" component={Home} />
                        <Route path="/workers/" component={Workers} />
                        <Route path="/day" component={Day} />
                        <Route path="/menu" component={Menu} />
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;