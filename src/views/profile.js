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
    this.contraseñaActual = React.createRef();
    this.contraseñaNueva = React.createRef();
    this.repetircontraseña = React.createRef();
    this.handleClickContraseña = this.handleClickContraseña.bind(this);
    this.state = {
      showChangePassword: false,
    }
  }
  
  myFunction() {
    this.setState({
      showChangePassword: true,
    });
  }
      handleClickContraseña() {
    const contraseñaActual = this.contraseñaActual.current.value;

        if (!validator.isLength(contraseñaActual,{password:123456} )) {
            alert('Contraseña actual incorrecta');
            return false;
        }

        const contraseñaNueva = this.contraseñaNueva.current.value;

        if (validator.isLength(contraseñaNueva, {password:654321})) {
        alert('La contraseña nueva no es valida');
            return false;
        }
         const repetircontraseña = this.repetircontraseña.current.value;
        alert('Las contraseñas no coinciden');

        if (validator.isLength(repetircontraseña, {password:654321})) {
            return false;
        }
          
      };
  render() {
    return (
      <div className="">
  <MDBContainer>
   <MDBRow top="true">
    <MDBCol height="40%">
     <MDBCard style={{ width: "22rem" }} height="50%" className="mx-auto align-self-center shadow-box-example z-depth-5 rounded justify-content-md-center border border-secondary">
        <MDBCardBody>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
          <MDBCardTitle><h1> <strong>Profile</strong></h1></MDBCardTitle>
            <i className="fas fa-user">Joaquin Nilo</i> <br /><br/>
            <i className="fas fa-at">jniloalvarado@gmail.com</i><br/><a href="https://log-in-last-proyect-joaquinn.c9users.io/cambioemail">Cambiar email</a><br /><br/>
            <p>
              <span>Ingresar número celular</span>
            </p>
            <i className="fathis.cons fa-mobile "><input type="tel"  placeholder="+569" id="myNumber" /></i> <br/>
            <MDBBtn  id="mostrar" onClick={this.myFunction}>Cambiar Contraseña</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
     <MDBCol>
      <MDBCard style={{ width: "22rem" }} height="50%" hidden={!this.state.showChangePassword} className="align-self-stretch shadow-box-example z-depth-5">
        <MDBCardBody>
          <MDBCardTitle>Cambio de Contraseña</MDBCardTitle>
          <p>Contraseña actual</p> <br/>
          <input ref={this.contraseñaActual} type="password" /> <p id="check"></p>
          <br/><br/>
          <p>Nueva contraseña</p><br/>
          <input type="password" ref={this.contraseñaNueva} /> <br/>
          <p>Repetir contraseña </p> <br/>
          <input type="password" ref={this.repetircontraseña}/> <br/> <br/>
          <MDBBtn color="deep-purple" onClick={this.handleClickContraseña }>Guardar cambios</MDBBtn> <br/>
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
