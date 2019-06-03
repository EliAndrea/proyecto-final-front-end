import React from "react";
import { MDBCol, MDBRow, MDBCard, MDBContainer } from 'mdbreact';
import { Redirect } from 'react-router-dom' 

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
            <MDBContainer className="marginTop">
                <MDBRow center>
                    <MDBCol size="5">
                        <MDBCard className="text-center border border-light p-5">
                                    <p className="h4 mb-4">Inicio de Sesión</p>
                                    <input type="text" id="loginFormEmail" className="form-control mb-4" placeholder="E-mail" onChange={this.saveUserName}/>
                                    <input type="password" id="loginFormPassword" className="form-control mb-4" placeholder="Password" onChange={this.savePassword}/>
                                    <div className="d-flex justify-content-around">
                                        <div>
                                            <a href="/password">¿Olvidó su contraseña?</a>
                                        </div>
                                    </div>
                                    <button className="btn btn-info btn-block my-4" onClick={this.clickSingIn}>Ingresar</button>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                {console.log(this.state.userName)}
                {console.log(this.state.password)}
            </MDBContainer>
        );
    }
}

export default Login2;