import React from 'react';
import '../App.css';  
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBContainer, MDBRow} from "mdbreact";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import validator from 'validator';

class Email extends React.Component {
    constructor(props) {
    super(props);
    this.emailActual = React.createRef();
    this.emailRquerido = React.createRef();
    this.emailVerificacion = React.createRef();
    this.alert = React.createRef();
    
    this.handleClickEmails = this.handleClickEmails.bind(this)
    }
    handleClickEmails() {
    const emailActual = this.emailActual.current.value;

        if (!validator.isEmail(emailActual,{email:'jniloalvarado@gmail.com'} )) {
            this.showAlert("Email invalido");
            
        return false;
        }

        const emailRquerido = this.emailRquerido.current.value;

        if (!validator.isEmail(emailRquerido, {email:'nilo@gmail.com'})) {
        
        this.showAlert("Contraseña invalida");
        
            return false;
        }
         const emailVerificacion = this.emailVerificacion.current.value;

        if (!validator.isEmail(emailVerificacion, {email:'nilo@gmail.com'})) {
        
        this.showAlert("Las contraseñas no coinciden");
        
            return false;
        }
          
      };
      
      showAlert(msg) {
          const ele = this.alert.current;
          ele.innerHTML= "";
          ele.innerHTML= msg;
          ele.classList.remove('d-none');
          
          setTimeout(() => {
              ele.classList.add('d-none');
          }, 5000);
          
      }
    render(){
        return (
        <div>
        <MDBContainer>
        <div className="alert alert-danger d-none" role="alert" ref={this.alert}>
        </div>
         <MDBRow top="true">
             <MDBCol>
      <MDBCard style={{ width: "22rem"}} height="50%" className="border border-warning align-self-stretch shadow-box-example z-depth-5">
        <MDBCardBody>
          <MDBCardTitle><h1><strong>Cambio de email</strong></h1></MDBCardTitle>
          <p>Email actual</p>
          <input type="text" ref={this.emailActual}/> <br/> <br/>
          <p>Email nuevo</p> 
          <input type="text" ref={this.emailRquerido}/> <br/> <br/>
          <p>Ingresar contraseña para guardar los datos</p> 
          <input type="text" ref={this.emailVerificacion}/> <br/> <br/>
          <MDBBtn color="deep-purple" onClick={this.handleClickEmails }>Enviar codigo de confimacion</MDBBtn> <br/>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
        </div>
        )
    }

    
}
export default Email;