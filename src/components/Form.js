import React from 'react';
import { MDBInput, MDBRow, MDBCol, MDBBtn } from "mdbreact";

export default class FormWorkers extends React.Component {
  render() {
    return (
        <form>
            <MDBRow>
                <MDBCol size="6">
                    <MDBInput label="Nombre" />
                </MDBCol>
                <MDBCol size="6">
                    <MDBInput label="Apellido" />
                </MDBCol>
            </MDBRow>
                <MDBInput label="Email" />
                <MDBInput label="Número de Teléfono" />
            <div className="form-group select">
                <select className="form-control" name="position" id="position">
                    <option defaultValue="">Cargo</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="btnAddWorker">
                <MDBBtn color="primary">Agregar Trabajador</MDBBtn>
            </div>
        </form>
    );
  }
}