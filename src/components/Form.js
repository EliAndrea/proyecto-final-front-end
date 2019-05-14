import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBInput, MDBRow, MDBCol, MDBBtn } from "mdbreact";

export default class FormWorkers extends React.Component {
    constructor(props){
        super(props);
  }
    render(){
        return (
            <div>
                {this.props.titulo === "Datos trabajador" ? (
                <MDBCard className="formWorkers">
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.titulo}</MDBCardTitle>
                        <form>
                            <MDBRow>
                                <MDBCol size="6">
                                    <MDBInput label="Nombre" value={this.props.firstName} disabled/>
                                </MDBCol>
                                <MDBCol size="6">
                                    <MDBInput label="Apellido" value={this.props.lastName} disabled/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="12">
                                    <MDBInput label="Email" value={this.props.email} disabled/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="12">
                                    <MDBInput label="Número de Teléfono" value={this.props.phone} disabled/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="12">
                                    <MDBInput label="Cargo" value={this.props.position} disabled/>
                                </MDBCol>
                            </MDBRow>
                        </form>
                    </MDBCardBody>
                </MDBCard>               
                ):(
                <MDBCard className="formWorkers">
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.titulo}</MDBCardTitle>
                        <form>
                            <MDBRow>
                                <MDBCol size="6">
                                    <MDBInput label="Nombre" hint={this.props.firstName} />
                                </MDBCol>
                                <MDBCol size="6">
                                    <MDBInput label="Apellido" hint={this.props.lastName} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="12">
                                    <MDBInput label="Email" hint={this.props.email} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="12">
                                    <MDBInput label="Número de Teléfono" hint={this.props.phone} />
                                </MDBCol>
                            </MDBRow>
                            <div className="form-group select">
                                <label className="labelCargo">Cargo</label>
                                <select className="form-control" name="position" id="position">
                                {this.props.positionsOptions.map((option, index) =>{
                                    return <option key={index} value={option}> {option} </option>;
                                    })
                                }
                                </select>
                            </div>
                            <div className="btnAddWorker">
                                <MDBBtn color="deep-purple" onClick={this.props.button}>Guardar cambios</MDBBtn>
                            </div>
                        </form>
                    </MDBCardBody>
                </MDBCard>
                )}
            </div>
        );
    }
}