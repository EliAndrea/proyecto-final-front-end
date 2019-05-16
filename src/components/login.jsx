import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import validator from 'validator';

export class Login extends React.Component { 
        
    constructor(props) {
        super(props);
        this.emailLogin = React.createRef();
        
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }
    
    handleClickLogin() {
        const emailLogin = this.emailLogin.current.value;
        
        if (!validator.isEmail(emailLogin)) {
            alert('El email no es valido');
            return false;
        }
    
    };
    
    render (){
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
                                    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4"ref={(c) => this.email = c} name="email"  />
                                    <button onClick={this.handleClickLogin }>Ingresar</button>
                                </div>
                            </div>
                            </p>
                        </div>
                    </div>
                </div>   
                </div>
            );
        };
    };
  
export default Login;
