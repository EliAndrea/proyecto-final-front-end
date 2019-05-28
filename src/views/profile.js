import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer, MDBRow} from "mdbreact";
import validator from 'validator';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.myFunction = this.myFunction.bind(this);
    this.state = {
      showChangePassword: false,
    }
  }
  
  myFunction() {
    this.setState({
      showChangePassword: true,
    });
  }
  render() {
    return (
      <div className="">
  <MDBContainer>
   <MDBRow top="true">
    <MDBCol height="40%">
     <MDBCard style={{ width: "22rem" }} height="50%" className="align-self-center shadow-box-example z-depth-5">
        <MDBCardBody>
          <MDBCardTitle> <strong>Profile</strong></MDBCardTitle>
            <i className="fas fa-user">Joaquin Nilo</i> <br /><br/>
            <i className="fas fa-at">jniloalvarado@gmail.com</i> <br /><br/>
            <p>
              <span>Ingresar número celular</span>
            </p>
            <i className="fas fa-mobile "><input type="tel"  placeholder="+569" id="myNumber" /></i> <br/>
            <MDBBtn  id="mostrar" onClick={this.myFunction}>Cambiar Contraseña</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
     <MDBCol>
      <MDBCard style={{ width: "22rem" }} height="50%" hidden={!this.state.showChangePassword} className="align-self-stretch shadow-box-example z-depth-5">
        <MDBCardBody>
          <MDBCardTitle>Cambio de Contraseña</MDBCardTitle>
          <p>Contraseña actual</p> <br/>
          <input type="text" />
          <br/><br/>
          <p>Nueva contraseña</p><br/>
          <input type="text" /> <br/>
          <p>Repetir contraseña </p> <br/>
          <input type="text" /> <br/>
          <MDBBtn color="deep-purple" onClick={this.clickSaveChanges}>Guardar cambios</MDBBtn> <br/>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
   </MDBRow>
  </MDBContainer>
    </div>

    )
  }


}
export default Profile;
