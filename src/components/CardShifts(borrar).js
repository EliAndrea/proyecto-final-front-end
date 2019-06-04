import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBRow, MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact';
import AddShifts from './AddShifts.js';

const shiftsTypes = [{name: "Día", beggin: "8:00", ending: "20:00"}, {name: "Noche", beggin: "20:00", ending: "8:00"}];
const shifts = [
    {
        shiftType: shiftsTypes[0],
        worker: "Chewy", 
        task: "asdf"
    }, 
    {
        shiftType: shiftsTypes[1],
        worker: "Chewy", 
        task: "asdf"
    }];

class CardShifts extends React.Component{
    constructor(){
        super();
        this.state = {
            list: shifts
        };
        this.addShift = this.addShift.bind(this);
    }
    addShift(newShift){
        let list = this.state.list;
        list.push(newShift);
        this.setState({shifts: list});
    }
    render(){
        return(
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody className="cardBody">
                                <MDBRow>
                                    <MDBCol size="2">
                                        <MDBCardTitle>Turno</MDBCardTitle>
                                        <MDBContainer>
                                            <MDBListGroup>
                                                {this.state.list.map((shift, index)=>{
                                                    return <MDBListGroupItem key={index}>{shift.shiftType.name}</MDBListGroupItem>;
                                                    })
                                                }
                                            </MDBListGroup>
                                        </MDBContainer>
                                    </MDBCol>
                                    <MDBCol size="3">
                                        <MDBCardTitle>Horario</MDBCardTitle>
                                        <MDBContainer>
                                            <MDBListGroup>
                                                {this.state.list.map((shift, index)=>{
                                                    return <MDBListGroupItem key={index}>{
                                                        shift.shiftType.beggin + " - " + shift.shiftType.ending
                                                        }
                                                        </MDBListGroupItem>;
                                                    })
                                                }
                                            </MDBListGroup>
                                        </MDBContainer>
                                    </MDBCol>
                                    <MDBCol size="4">
                                        <MDBCardTitle>Trabajador</MDBCardTitle>
                                        <MDBContainer>
                                            <MDBListGroup>
                                                {this.state.list.map((shift, index)=>{
                                                    return <MDBListGroupItem key={index}>{shift.worker}</MDBListGroupItem>;
                                                    })
                                                }
                                            </MDBListGroup>
                                        </MDBContainer>
                                    </MDBCol>
                                    <MDBCol size="3">
                                        <MDBCardTitle>Tarea</MDBCardTitle>
                                        <MDBContainer>
                                            <MDBListGroup>
                                                {this.state.list.map((shift, index)=>{
                                                    return <MDBListGroupItem key={index}>{shift.task}</MDBListGroupItem>;
                                                    })
                                                }
                                            </MDBListGroup>
                                        </MDBContainer>
                                    </MDBCol>
                                </MDBRow>
                                <hr className="my-4"/>
                                <AddShifts func={this.addShift} />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default CardShifts;