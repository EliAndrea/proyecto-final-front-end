import React from 'react';
import { MDBCol, MDBRow, MDBInput, MDBCard, MDBCardBody, MDBContainer, MDBCardTitle, MDBListGroup, MDBListGroupItem, MDBIcon, MDBBtn } from 'mdbreact';
import Alert from './Alert.js';

class Positions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            position: {
                position_name: ""
            },
            showAlert: false,
            color: "",
            title: "",
            textAlert: ""
        };
    }
    componentDidMount(){
        this.props.updatePositions();    
    }
    addPosition = () => {
        let newPosition = this.state.position;
        fetch('http://127.0.0.1:8000/api/positions/',
        {
            method: 'POST',
            body: JSON.stringify(newPosition),
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
                    title: "Nuevo cargo agregado exitosamente",
                    textAlert: ""
                });
                this.props.updatePositions();
            }
            else{
                this.setState({
                    showAlert: true,
                    color: "danger",
                    title: "No se pudo agregar el nuevo cargo",
                    textAlert: "Ha ocurrido un error"
                });
            }
        })
        .catch(error =>{
            this.setState({
                showAlert: true,
                color: "danger",
                title: "No se pudo agregar el nuevo cargo",
                textAlert: "Ha ocurrido un error"
            });
        });
    }
    deletePosition = (id) => {
        fetch('http://127.0.0.1:8000/api/positions/' + id, 
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
                    title: "Cargo eliminado",
                    textAlert: ""
                });
		        this.props.updatePositions();
		    }   
		})
		.catch(error =>{
            this.setState({
                showAlert: true,
                color: "danger",
                title: "Ha ocurrido un error",
                textAlert: "No se pudo eliminar el cargo"
            });
        });
    }
    checkPosition = () =>{
        if(this.state.position.position_name === ""){
            this.setState({
                showAlert: true,
                color: "danger",
                title: "No se pudo agregar el cargo",
                textAlert: "Debe ingresar un nombre para el nuevo cargo"
            });
        }
        else{
            this.addPosition();
        }
    }
    closeAlert = () => {
        this.setState({showAlert:false});
    }
    
    render(){
        let list = this.props.positions;
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
                            <MDBCardTitle className="font-weight-normal">Tipos de cargo guardados</MDBCardTitle>
                            <MDBListGroup>
                                <MDBListGroupItem color="dark">
                                    <MDBRow className="text-center font-weight-bolder">
                                        <MDBCol size="10">
                                            Cargo
                                        </MDBCol>
                                    </MDBRow>
                                </MDBListGroupItem>
                                {list.map((position, index)=>{
                                    return (
                                        <MDBListGroupItem key={index}>
                                            <MDBRow>
                                            <MDBCol size="10">
                                                {position.position_name}
                                            </MDBCol>
                                            <MDBCol size="2">
                                                <MDBIcon className="link" icon="trash" onClick={()=>this.deletePosition(position.id)} />
                                            </MDBCol>
                                            </MDBRow>
                                        </MDBListGroupItem>);
                                    })
                                }
                            </MDBListGroup>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol sm="12" lg="6">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Crear nuevo cargo</MDBCardTitle>
                                <MDBInput label="Nombre" maxLength="20" minLength="3" onChange={(event)=>{
                                    let newPosition = this.state.position;
                                    newPosition.position_name = event.target.value;
                                    this.setState({position: newPosition});
                                }}/>
                                <div className="text-right">
                                    <MDBBtn className="white-text mt-4" color="mdb-color" onClick={this.checkPosition}>Agregar Cargo</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Positions;