import React from 'react';
import '../App.css';  
import Login2 from '../components/Login2.js';
import { Context } from '../context/themeProvider.js';
//import '@fortawesome/fontawesome-free/css/all.min.css';
//import 'bootstrap-css-only/css/bootstrap.min.css';
//import 'mdbreact/dist/css/mdb.css';

function LoginView() {
    return (
        <div>
            <Context.Consumer>
            {context => {
                return <Login2 actions={context.actions} models={context.models}/>;
                }
            }
            </Context.Consumer>
        {/* <div className="App container-fluid ">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <Login/>
                </div>
            </div>
        </div>*/}
        </div>
    );
}

export default LoginView;
