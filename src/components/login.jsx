import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
export class Login extends React.Component { 
    render (){
        return (
        <div className="rounded-left example z-depth-5 #c5cae9 indigo lighten-4" alt="100x100">    
            <div className="border border-light p-5">
                <div className="card-body">
                    <h2 className="font-weight-bold deep-orange-lighter-hover mb-3 .bounceIn">Inicio de sesión</h2>
                    <p className="card-text">
                        <div className="align-self-baseline">
                             <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail"/>
                            <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password"/>
                            <label for="inputValidationEx" 
                            data-error="wrong"
                            data-success="right"> <a href="google.com">Olvidaste la contraseña?</a> </label>
                        </div>
                    </p>
                    <a href="#!" className="btn btn-primary">Ingresar</a>
                </div>
            </div>
        </div>    
            );
        };
    };

export default Login;