import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/home.js';
import Workers from './views/workers.js';
import Day from './views/day.js';
import ThemeProvider from "./context/themeProvider.js";
//import Login from "./views/login.js";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="App">
                    {/*<Route path="/" exact component={Login} />*/}
                    <Switch>
                        <Route path="/home/" component={Home} />
                        <Route path="/workers/" component={Workers} />
                        <Route path="/day" component={Day} />
                    </Switch>
                    {/*<Route path="/user/home/" component={HomeUser} />
                    <Route path="/user/change/" component={Change} />*/}
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;