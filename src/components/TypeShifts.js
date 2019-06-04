import React from 'react';
import { MDBCol, MDBRow, MDBInput, MDBCard, MDBCardBody, MDBContainer, MDBCardTitle, MDBListGroup, MDBListGroupItem, MDBIcon, MDBBtn } from 'mdbreact';
import { FormGroup, Label, Input } from 'reactstrap';

class TypeShifts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: {}
        };
    }
    
    addTypeShift = () => {
        let newType = this.state.type;
        fetch('http://127.0.0.1:8000/api/shifts-types/',
        {
            method: 'POST',
            body: JSON.stringify(newType),
            headers: {
                "Content-Type": "application/json",
				"Authorization": "Token " + localStorage.getItem('token')
            }
        })
        .then(resp => resp.json())
        .then(response => {
            console.log(response);
            this.props.updateTypes();
        })
        .catch(error => console.error('Error:', error));
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
		    console.log(resp);
		    this.props.updateTypes();
		    })
		.catch(error => console.error('Error:', error));
    }
    
    componentDidMount(){
        this.props.updateTypes();
    }
    render(){
        let list = this.props.listTypes;
        return(
            <MDBContainer className="mt-4">
                <MDBRow>
                    <MDBCol size="6">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Nuevo tipo de turno</MDBCardTitle>
                                <MDBInput label="Nombre" maxLength="20" minLength="3" onChange={(event)=>{
                                    let newtype = this.state.type;
                                    newtype.shift_name = event.target.value;
                                    this.setState({type: newtype});
                                }}/>
                                <MDBRow>
                                    <MDBCol size="6">
                                        <FormGroup>
                                            <Label for="timeStart">Hora de Inicio:</Label>
                                            <Input type="time" name="time" id="timeStart" placeholder="time placeholder" onChange={(event)=>{
                                                let newtype = this.state.type;
                                                newtype.shift_start = event.target.value;
                                                this.setState({type: newtype});
                                            }}/>
                                        </FormGroup>
                                    </MDBCol>
                                    <MDBCol size="6">
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
                                <div className="btnRight">
                                    <MDBBtn color="deep-purple" size="sm" onClick={this.addTypeShift}>Agregar nuevo tipo de turno</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="6">
                        <MDBContainer>
                            <MDBListGroup>
                                <MDBListGroupItem>
                                    <MDBRow>
                                        <MDBCol size="5">
                                            Nombre
                                        </MDBCol>
                                        <MDBCol size="5">
                                            Horario
                                        </MDBCol>
                                    </MDBRow>
                                </MDBListGroupItem>
                                {list.map((type, index)=>{
                                    {console.log(type)}
                                    return (
                                        <MDBListGroupItem key={index}>
                                            {console.log(type)}
                                            <MDBRow>
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
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default TypeShifts;