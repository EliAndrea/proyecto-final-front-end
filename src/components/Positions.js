import React from 'react';
import { MDBCol, MDBRow, MDBInput, MDBCard, MDBCardBody, MDBContainer, MDBCardTitle, MDBListGroup, MDBListGroupItem, MDBIcon, MDBBtn } from 'mdbreact';

class Positions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            position: {}
        };
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
        .then(resp => resp.json())
        .then(response => {
            console.log(response);
            this.props.updatePositions();
        })
        .catch(error => console.error('Error:', error));
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
		    console.log(resp);
		    this.props.updatePositions();
		    })
		.catch(error => console.error('Error:', error));
    }

    componentDidMount(){
        this.props.updatePositions();    
    }
    
    render(){
        let list = this.props.positions;
        return(
            <MDBContainer className="mt-4">
                <MDBRow>
                    <MDBCol size="6">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Nuevo Cargo</MDBCardTitle>
                                <MDBInput label="Nombre" maxLength="20" minLength="3" onChange={(event)=>{
                                    let newPosition = this.state.position;
                                    newPosition.position_name = event.target.value;
                                    this.setState({position: newPosition})
                                }}/>
                                <div className="btnRight">
                                    <MDBBtn color="deep-purple" size="sm" onClick={this.addPosition}>Agregar nuevo Cargo</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size="6">
                        <MDBContainer>
                            <MDBListGroup>
                                <MDBListGroupItem>
                                    <MDBRow>
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
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Positions;