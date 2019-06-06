import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBInput, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Alert from './Alert.js';

class FormWorkers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            worker: this.props.worker,
            showAlert: false,
            color: "",
            title: "",
            textAlert: ""
        };
    }
    clickSaveChanges= () => {
        if (this.props.form === "addWorker"){
            this.addNewWorker();
        }
        else if (this.props.form === "editWorker"){
            this.updateWorker();
        }
    }
    addNewWorker = () => {
        let worker = this.state.worker;
        console.log(worker);
        fetch("http://127.0.0.1:8000/api/users/", 
        {
            method: "POST",
            body: JSON.stringify(worker),
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.getItem('token')
                }
        })
        .then(res => {
            if(res.status === 200){
                let msg = "Nuevo trabajador agregado";
                this.props.hide();
                this.props.alert(msg);
                this.props.actions.updateWorkersList();
            }
            else{
                this.setState({
                    showAlert: true,
                    color: "danger",
                    title: "Ha ocurrido un error",
                    textAlert: "No se pudo agregar el trabajador"
                });
            }
        })
        .catch(error =>{
            this.setState({
                showAlert: true,
                color: "danger",
                title: "Ha ocurrido un error",
                textAlert: "No se pudo agregar el trabajador"
            });
        });
    }
    updateWorker = () => {
        let worker = this.state.worker;
        let url = "http://127.0.0.1:8000/api/users/" + worker.id;
        delete worker.id;
        fetch(url, 
        {
            method: "PUT",
            body: JSON.stringify(worker),
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.getItem('token')
                }
        })
        .then(res => {
            if(res.status === 200){
                let msg = "Datos de trabajador actualizados";
                this.props.hide();
                this.props.alert(msg);
                this.props.actions.updateWorkersList();
            }
            else{
                this.setState({
                    showAlert: true,
                    color: "danger",
                    title: "Ha ocurrido un error",
                    textAlert: "No se pudo actualizar los datos del trabajador"
                });
            }
        })
        .catch(error =>{
            this.setState({
                showAlert: true,
                color: "danger",
                title: "Ha ocurrido un error",
                textAlert: "No se pudo actualizar los datos del trabajador"
            });
        });
    }
    closeAlert = () => {
        this.setState({showAlert:false});
        this.props.hide();
    }
    render(){
        let worker = this.props.worker;
        //Se busca el objeto posición para reemplazar el ID
        let position = this.props.models.positions.find((position)=>{return position.id === worker.positions_id});
        let msgAlert;
        if(this.state.showAlert){
            msgAlert = <Alert color={this.state.color} title={this.state.title} text={this.state.textAlert} closeAlert={this.closeAlert} sizeLg="12"/>;
        }
        return (
            <div>
                {msgAlert}
                {this.props.form === "showWorker" ? (
                <MDBCard className="formWorkers">
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.titulo}</MDBCardTitle>
                        <form>
                            <MDBRow>
                                <MDBCol size="6">
                                    <MDBInput label="Nombre" value={worker.first_name} disabled/>
                                </MDBCol>
                                <MDBCol size="6">
                                    <MDBInput label="Apellido" value={worker.last_name} disabled/>
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
                                    <MDBInput label="Nombre" value={worker.first_name} maxLength="20" minLength="3" required
                                        onChange={(event)=>{
                                            worker.first_name = event.target.value;
                                            this.setState({worker: worker});
                                        }}
                                    />
                                </MDBCol>
                                <MDBCol size="6">
                                    <MDBInput label="Apellido" value={worker.last_name} maxLength="20" minLength="3" required
                                        onChange={(event)=>{
                                            worker.last_name = event.target.value;
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
                                    {this.props.models.positions.map((option, index) =>{
                                        return <option key={index} value={option.id}> {option.position_name} </option>;
                                    })
                                }
                                </select>
                            </div>
                            <div className="btnAddWorker">
                                <MDBBtn className="white-text mt-3 mr-0" color="mdb-color" onClick={this.clickSaveChanges}>Guardar cambios</MDBBtn>
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