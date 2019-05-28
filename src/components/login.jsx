import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import validator from 'validator';
import { MDBBtn } from "mdbreact";
export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.emailLogin = React.createRef();
        this.passwordLogin = React.createRef();
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }

    handleClickLogin() {
        const emailLogin = this.emailLogin.current.value;

        if (!validator.isEmail(emailLogin)) {
            alert('El email no es valido');
            return false;
        }

        const passwordLogin = this.passwordLogin.current.value;
        alert('La contraseña no es valida');

        if (validator.isLength(passwordLogin, { min: 6 })) {
            return false;
        }
    }

    /*Login = () => {
        let data = {
            'email': email,
            'password': password
        }
    

     return fetch("http://10.105.105.137:8000/api/login", {
                method: 'get',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization' : 'Token' + this.state.user.token 
                }),
            })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            .catch(error => console.log(error));
            if (resp.token){
                this.setState({user: {}, isAuthenticated: false})
            }else
                this.setState({errors: resp})
        };
    }*/

    render() {
        return (
            <div>
                <div className="rounded-left example z-depth-5 #c5cae9 indigo lighten-4jn" alt="100x100">    
                    <div className="border border-light p-5">
                        <div className="card-body">
                            <h2 className="font-weight-bold deep-orange-lighter-hover mb-3 .bounceIn">Inicio de sesión</h2>
                            <p className="card-text">
                            <div className="apasswordlign-self-baseline">
                                <div className="">
                                   <input type="email" ref={this.emailLogin} onChange="" id="defaultLoginFormEmail" className="form-control mb-4" />
                                    <input type="password" ref={this.passwordLogin} onChange="" id="defaultLoginFormPassword" className="form-control mb-4"r />
                                    <MDBBtn color="light-blue" onClick={this.handleClickLogin }>Ingresar</MDBBtn>
                                </div>
                            </div>
                            </p>
                        </div>
                    </div>
                </div>   
        </div>

        );
    };
    
    

        
    }



export default Login;
