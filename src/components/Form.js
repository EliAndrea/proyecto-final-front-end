import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBInput, MDBRow, MDBCol, MDBBtn } from "mdbreact";

class FormWorkers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            worker: this.props.worker
        };
    }
    clickSaveChanges= () => {
        if (this.props.form === "addWorker"){
            this.addNewWorker();
            this.props.hide();
        }
        else if (this.props.form === "editWorker"){
            console.log("modificando usuario");
            this.updateWorker();
            this.props.hide();
        }
    }
    addNewWorker = () => {
        let worker = this.state.worker;
        //worker.role = "user";   Esto debe ser reemplazado por el user_id, creada al crear usuario
        fetch("http://127.0.0.1:8000/api/users/", {
            method: 'POST',
            body: JSON.stringify(worker),
            headers:{
                'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(response => {
                console.log(response);
                this.props.actions.updateWorkersList();
            })
            .catch(error => console.error('Error:', error));
        }
    updateWorker = () => {
        let worker = this.state.worker;
        let url = "http://127.0.0.1:8000/api/users/" + worker.id;
        delete worker.id;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(worker),
            headers:{
                'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(response => {
                console.log(response);
                this.props.actions.updateWorkersList();
            })
            .catch(error => console.error('Error:', error));
        }
        
        
    
    render(){
        let worker = this.props.worker;
        //Se busca el objeto posición para reemplazar el ID
        let position = this.props.positions.find((position)=>{return position.id === worker.positions_id});
        return (
            <div>
                {this.props.form === "showWorker" ? (
                <MDBCard className="formWorkers">
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.titulo}</MDBCardTitle>
                        <form>
                            <MDBRow>
                                <MDBCol size="6">
                                    <MDBInput label="Nombre" value={worker.f_name} disabled/>
                                </MDBCol>
                                <MDBCol size="6">
                                    <MDBInput label="Apellido" value={worker.l_name} disabled/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="12">
                                    <MDBInput label="Email" value={worker.email} disabled/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="12">
                                    <MDBInput label="Número de Teléfono" value={worker.phone_number} disabled/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="12">
                                    <MDBInput label="Cargo" value={position.position_name} disabled/>
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
                                    <MDBInput label="Nombre" value={worker.f_name} maxLength="20" minLength="3" required
                                        onChange={(event)=>{
                                            worker.f_name = event.target.value;
                                            this.setState({worker: worker});
                                        }}
                                    />
                                </MDBCol>
                                <MDBCol size="6">
                                    <MDBInput label="Apellido" value={worker.l_name} maxLength="20" minLength="3" required
                                        onChange={(event)=>{
                                            worker.l_name = event.target.value;
                                            this.setState({worker: worker});
                                        }}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="12">
                                    <MDBInput label="Email" value={worker.email} type="email" required
                                        onChange={(event)=>{
                                            worker.email = event.target.value;
                                            this.setState({worker: worker});
                                        }}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="12">
                                    <MDBInput label="Número de Teléfono" value={worker.phone_number} maxLength="20" minLength="3" required
                                        onChange={(event)=>{
                                            worker.phone_number = event.target.value;
                                            this.setState({worker: worker});
                                        }}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <div className="form-group select">
                                <label className="label">Cargo</label>
                                <select className="form-control" name="position" id="position" value={worker.positions_id} required
                                        onChange={(event)=>{
                                            worker.positions_id = event.target.value;
                                            this.setState({worker: worker});
                                        }}
                                >
                                    <option value="">Seleccione un cargo</option>
                                    {this.props.positions.map((option, index) =>{
                                        return <option key={index} value={option.id}> {option.position_name} </option>;
                                    })
                                }
                                </select>
                            </div>
                            <div className="btnAddWorker">
                                <MDBBtn color="deep-purple" onClick={this.clickSaveChanges}>Guardar cambios</MDBBtn>
                            </div>
                        </form>
                    </MDBCardBody>
                </MDBCard>
                )}
            </div>
        );
    }
}

export default FormWorkers;