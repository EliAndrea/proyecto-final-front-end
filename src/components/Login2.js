import React from "react";
import { MDBCol, MDBRow, MDBCard, MDBContainer, MDBCardBody, MDBIcon } from 'mdbreact';
import { Redirect } from 'react-router-dom'; 

class Login2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
    }
    saveUserName = (event) => {
        this.setState({userName: event.target.value});
    }
    savePassword = (event) => {
        this.setState({password: event.target.value});
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
            .then(res => {return res.json()})
            .then(response => {
                console.log(response);
                this.props.actions.saveUser(response);
            })
            .catch(error => console.error('Error:', error));
    }
    render(){
        if (this.props.models.user.is_authenticated){
            return <Redirect to='/home/' />;
        }
        return(
            <div className="mt-5">
                <h1 className="text-center">Shift x Shift</h1>
                <MDBContainer className="mt-5">
                    <MDBRow center>
                        <MDBCol size="5">
                            <MDBCard>
                                <MDBCardBody>
                                    <p className="h4 mb-4 text-center">Inicio de Sesión</p>
                                    <div className="mt-5">
                                        <MDBIcon icon="user"/>
                                        <input type="text" id="loginFormUserName" className="form-control mb-4 inputLogin" placeholder="Nombre de usuario" onChange={this.saveUserName}/>
                                    </div>
                                    <div>
                                        <MDBIcon icon="lock"/>
                                        <input type="password" id="loginFormPassword" className="form-control mb-4 inputLogin" placeholder="Password" onChange={this.savePassword}/>
                                    </div>
                                    <div className="mt-5">
                                        <button className="btn-block my-4 btn btn-primary" onClick={this.clickSingIn}>Ingresar</button>
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

export default Login2;