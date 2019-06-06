import React from 'react';
import { MDBCol, MDBRow, MDBInput, MDBCard, MDBCardBody, MDBContainer, MDBCardTitle, MDBListGroup, MDBListGroupItem, MDBIcon, MDBBtn } from 'mdbreact';
import { FormGroup, Label, Input } from 'reactstrap';
import Alert from './Alert.js';

class TypeShifts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: {
                shift_name: "",
                shift_start: "",
                shift_end: ""
            },
            showAlert: false,
            color: "",
            title: "",
            textAlert: ""
        };
    }
    componentDidMount(){
        this.props.updateTypes();
    }
    addTypeShift = () => {
        let newType = this.state.type;
        console.log(newType)
        fetch('http://127.0.0.1:8000/api/shifts-types/',
        {
            method: 'POST',
            body: JSON.stringify(newType),
            headers: {
                "Content-Type": "application/json",
				"Authorization": "Token " + localStorage.getItem('token')
            }
        })
        .then(res => {
            if(res.status === 200){
                this.setState({
                    showAlert: true,
                    color: "success",
                    title: "Tipo de turno agregado exitosamente",
                    textAlert: ""
                });
                this.props.updateTypes();
            }
            else{
                this.setState({
                    showAlert: true,
                    color: "danger",
                    title: "No se pudo agregar el tipo de turno",
                    textAlert: "Ha ocurrido un error"
                });
            }
        })
        .catch(error =>{
            this.setState({
                showAlert: true,
                color: "danger",
                title: "No se pudo agregar el tipo de turno",
                textAlert: "Ha ocurrido un error"
            });
        });
    }
    deleteTypeShift = (id) => {
        fetch('http://127.0.0.1:8000/api/shifts-types/' + id, 
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
				"Authorization": "Token " + localStorage.getItem('token')
            }
        })
        .then((resp)=> {
		    if(resp.ok){
                this.setState({
                    showAlert: true,
                    color: "success",
                    title: "Tipo de turno eliminado",
                    textAlert: ""
                });
		        this.props.updateTypes();
		        }   
		    })
		.catch(error =>{
                this.setState({
                    showAlert: true,
                    color: "danger",
                    title: "No se pudo eliminar el tipo de turno",
                    textAlert: "Ha ocurrido un error"
                });
            });
    }
    checkTypeShift = () => {
        if(this.state.type.shift_name === "" || this.state.type.shift_start === "" || this.state.type.shift_end === ""){
            this.setState({
                showAlert: true,
                color: "danger",
                title: "No se pudo agregar el tipo de turno",
                textAlert: "Debe ingresar un nombre, hora de inicio y hora de término para el nuevor tipo un turno"
            });
        }
        else{
            this.addTypeShift();
        }
    }
    closeAlert = () => {
        this.setState({showAlert:false});
    }
    render(){
        let list = this.props.listTypes;
        let msgAlert;
        if(this.state.showAlert){
            msgAlert = <Alert color={this.state.color} title={this.state.title} text={this.state.textAlert} closeAlert={this.closeAlert} sizeLg="8"/>;
        }
        return(
            <MDBContainer className="mt-4">
                {msgAlert}
                <MDBRow>
                    <MDBCol sm="12" lg="6">
                        <MDBContainer>
                            <MDBCardTitle className="font-weight-normal">Tipos de turnos guardados</MDBCardTitle>
                            <MDBListGroup>
                                <MDBListGroupItem color="dark">
                                    <MDBRow className="text-center font-weight-bolder">
                                        <MDBCol size="5">
                                            Nombre
                                        </MDBCol>
                                        <MDBCol size="5">
                                            Horario
                                        </MDBCol>
                                    </MDBRow>
                                </MDBListGroupItem>
                                {list.map((type, index)=>{
                                    return (
                                        <MDBListGroupItem key={index}>
                                            <MDBRow className="text-center">
                                            <MDBCol size="5">
                                                {type.shift_name}
                                            </MDBCol>
                                            <MDBCol size="5">
                                                {type.shift_start.substr(0, 5) + " - " + type.shift_end.substr(0, 5)}
                                            </MDBCol>
                                            <MDBCol size="2">
                                                <MDBIcon className="link" icon="trash" onClick={()=>this.deleteTypeShift(type.id)} />
                                            </MDBCol>
                                            </MDBRow>
                                        </MDBListGroupItem>);
                                    })
                                }
                            </MDBListGroup>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol sm="12" lg="6">
                        <MDBCard className="mb-3">
                            <MDBCardBody>
                                <MDBCardTitle>Nuevo tipo de turno</MDBCardTitle>
                                <MDBInput label="Nombre" maxLength="20" minLength="2" onChange={(event)=>{
                                    let newtype = this.state.type;
                                    newtype.shift_name = event.target.value;
                                    this.setState({type: newtype});
                                }}/>
                                <MDBRow>
                                    <MDBCol sm="12" lg="6">
                                        <FormGroup>
                                            <Label for="timeStart">Hora de Inicio:</Label>
                                            <Input type="time" name="time" id="timeStart" placeholder="time placeholder" onChange={(event)=>{
                                                let newtype = this.state.type;
                                                newtype.shift_start = event.target.value;
                                                this.setState({type: newtype});
                                            }}/>
                                        </FormGroup>
                                    </MDBCol>
                                    <MDBCol som="12" lg="6">
                                        <FormGroup>
                                            <Label for="timeEnd">Hora de Término:</Label>
                                            <Input type="time" name="time" id="timeEnd" placeholder="time placeholder" onChange={(event)=>{
                                                let newtype = this.state.type;
                                                newtype.shift_end = event.target.value;
                                                this.setState({type: newtype});
                                            }}/>
                                        </FormGroup>
                                   </MDBCol>
                                </MDBRow>
                                <div className="text-right">
                                    <MDBBtn className="white-text mt-4" color="mdb-color" onClick={this.checkTypeShift}>Agregar tipo de turno</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default TypeShifts;