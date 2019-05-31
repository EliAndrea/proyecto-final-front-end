import React from 'react';
import '../App.css';  
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBContainer, MDBRow} from "mdbreact";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
class Recuperacion extends React.Component {

  /* changePassBtnClick(){
      localStorage.setItem('password', document.getElementById('changePass').value);
      alert('Password changed');
    }    
  if(!localStorage.getItem('password')){
      localStorage.setItem('password', 'pass');
    }*/
    render(){
        return (
        <div>
             <MDBCol>
      <MDBCard style={{ width: "22rem"}} height="50%" className="align-self-stretch shadow-box-example z-depth-5">
        <MDBCardBody>
          <MDBCardTitle><h1><strong>Recuperacion de Contraseña</strong></h1></MDBCardTitle>
          <p>Nueva contraseña</p><br/>
          <input type="text" /> <br/>
          <p>Repetir contraseña </p> <br/>
          <input type="text" /> <br/>
          <MDBBtn  id="changePassBtn" color="deep-purple"onclick='changePassBtnClick()'>Guardar cambios</MDBBtn> <br/>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
        </div>
        )
    }

    
}
export default Recuperacion;