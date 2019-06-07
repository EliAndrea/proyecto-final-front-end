import React from "react";
import { MDBCol, MDBRow, MDBCard, MDBContainer, MDBCardBody, MDBInput } from 'mdbreact';
import { Redirect } from 'react-router-dom'; 
import Alert from './Alert.js';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            password: "",
            showAlert: false,
            textAlert: ""
        };
    }
    saveUserName = (event) => {
        this.setState({userName: event.target.value});
    }
    savePassword = (event) => {
        this.setState({password: event.target.value});
    }
    closeAlert = () => {
        this.setState({showAlert:false});
    }
    clickSingIn = () => {
        let data = {
            username: this.state.userName,
            password: this.state.password
        };
        fetch("http://127.0.0.1:8000/api/login/", 
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json"}
            })
            .then(res => {
                if(res.status === 200){
                    return res.json();
                }
                else if(res.status === 400){
                    this.setState({
                        showAlert: true,
                        textAlert: "Ingrese un nombre de usuario y/o contraseña correctos"
                    });
                }
                else{
                    this.setState({
                        showAlert: true,
                        textAlert: "Ha ocurrido un error"
                    });
                }
            })
            .then(response => {
                this.props.actions.saveUser(response);
            })
            .catch(error => {
                this.setState({
                    showAlert: true,
                    textAlert: "Ha ocurrido un error"
                });
            });
    }
    render(){
        let msgAlert;
        if(this.state.showAlert){
            msgAlert = <Alert color="danger" title="No se pudo iniciar sesión" text={this.state.textAlert} closeAlert={this.closeAlert}/>;
        }
        if (this.props.models.user.is_authenticated){
            return <Redirect to='/' />;
        }
        return(
            <div className="mt-5">
                <h1 className="text-center">Turno x Turno</h1>
                {msgAlert}
                <MDBContainer className="mt-3">
                    <MDBRow center>
                        <MDBCol sm="12" lg="6">
                            <MDBCard>
                                <MDBCardBody>

                                    <div className="grey-text">
                                        <MDBInput
                                            label="Nombre de usuario"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={this.saveUserName}
                                      />
                                        <MDBInput
                                            label="Contraseña"
                                            icon="lock"
                                            group
                                            type="password"
                                            validate
                                            onChange={this.savePassword}
                                      />
                                    </div>
                                    <div className="mt-5">
                                        <button className="btn-block my-4 btn btn-primary" onClick={this.clickSingIn}>Iniciar Sesión</button>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default Login;