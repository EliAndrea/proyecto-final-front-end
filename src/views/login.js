import React from 'react';
import '../App.css';  
import Login from '../components/Login.js';
import { Context } from '../context/themeProvider.js';

function LoginView() {
    return (
        <div>
            <Context.Consumer>
            {context => {
                return <Login actions={context.actions} models={context.models}/>;
                }
            }
            </Context.Consumer>
        </div>
    );
}

export default LoginView;
