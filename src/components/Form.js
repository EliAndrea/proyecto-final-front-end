import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBInput, MDBRow, MDBCol, MDBBtn } from "mdbreact";

export default class FormWorkers extends React.Component {
  constructor(props){
      super(props);
  }
  render() {
    return (
        <MDBCard className="formWorkers">
            <MDBCardBody>
                <MDBCardTitle>{this.props.titulo}</MDBCardTitle>
                <form>
                    <MDBRow>
                        <MDBCol size="6">
                            <MDBInput label="Nombre" value={this.props.firstName} />
                        </MDBCol>
                        <MDBCol size="6">
                            <MDBInput label="Apellido" value={this.props.lastName} />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="12">
                            <MDBInput label="Email" value={this.props.email} />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="12">
                            <MDBInput label="Número de Teléfono" value={this.props.phone} />
                        </MDBCol>
                    </MDBRow>
                    <div className="form-group select">
                        <select className="form-control" name="position" id="position">
                            <option defaultValue={this.props.position}>{this.props.position}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="btnAddWorker">
                        <MDBBtn color="deep-purple">Agregar Trabajador</MDBBtn>
                    </div>
                </form>
            </MDBCardBody>
        </MDBCard>                
    );
  }
}