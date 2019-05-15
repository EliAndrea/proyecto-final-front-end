import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBInput, MDBRow, MDBCol, MDBBtn } from "mdbreact";

export default class FormWorkers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            worker: this.props.worker,
        };
    }
    render(){
        let newWorker = this.state.worker; 
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
                        <form onSubmit={()=>{this.props.button(this.state.worker)}}>
                            <MDBRow>
                                <MDBCol size="6">
                                    <MDBInput label="Nombre" value={this.props.firstName} maxLength="20" minLength="3" required
                                        onChange={(event)=>{
                                            newWorker.firstName = event.target.value;
                                            this.setState({worker: newWorker});
                                        }}
                                    />
                                </MDBCol>
                                <MDBCol size="6">
                                    <MDBInput label="Apellido" value={this.props.lastName} maxLength="20" minLength="3" required
                                        onChange={(event)=>{
                                            newWorker.lastName = event.target.value;
                                            this.setState({worker: newWorker});
                                        }}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="12">
                                    <MDBInput label="Email" value={this.props.email} type="email" required
                                        onChange={(event)=>{
                                            newWorker.email = event.target.value;
                                            this.setState({worker: newWorker});
                                        }}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="12">
                                    <MDBInput label="Número de Teléfono" value={this.props.phone} maxLength="20" minLength="3" required
                                        onChange={(event)=>{
                                            newWorker.phone = event.target.value;
                                            this.setState({worker: newWorker});
                                        }}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <div className="form-group select">
                                <label className="labelCargo">Cargo</label>
                                <select className="form-control" name="position" id="position" required
                                        onChange={(event)=>{
                                            newWorker.phone = event.target.value;
                                            this.setState({worker: newWorker});
                                        }}
                                >
                                    <option value="">Seleccione un cargo</option>
                                    {this.props.positionsOptions.map((option, index) =>{
                                        return <option key={index} value={option}> {option} </option>;
                                    })
                                }
                                </select>
                            </div>
                            <div className="btnAddWorker">
                                <MDBBtn color="deep-purple" type="submit">Guardar cambios</MDBBtn>
                            </div>
                        </form>
                    </MDBCardBody>
                </MDBCard>
                )}
            </div>
        );
    }
}