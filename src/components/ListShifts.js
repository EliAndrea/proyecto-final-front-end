import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBRow, MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact';

//const shiftsTypes = [{name: "Día", beggin: "8:00", ending: "20:00"}, {name: "Noche", beggin: "20:00", ending: "8:00"}];
const positions = ["Agente encubierto", "Mascota", "Mago"];
/*const workers = [
        {
            firstName: "Chewy",
            lastName: "Asdf",
            email: "chewy@asdf.cl",
            phone: "+12345667",
            position: positions[0]
        },
        {
            firstName: "Bilbo",
            lastName: "Asdf",
            email: "bilbito@asdf.com",
            phone: "+765465654654",
            position: positions[1]
        },
        {
            firstName: "Yoshi",
            lastName: "Asdf",
            email: "yoshi@asdf.com",
            position: positions[1]
        },
        {
            firstName: "Gandalf",
            lastName: "Asdf",
            email: "thewhite@asdf.com",
            position: positions[2]
        }];
const shifts = [
    {
        shiftType: shiftsTypes[0],
        worker: workers[0], 
        task: "asdf"
    }, 
    {
        shiftType: shiftsTypes[1],
        worker: workers[1], 
        task: "qwqew"
    }];*/

class ListShifts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valueFilter: ""
        };
        this.addShift = this.addShift.bind(this);
    }
    addShift(newShift){
        let list = this.state.list;
        list.push(newShift);
        this.setState({shifts: list});
    }
    render(){
        /*let filteredList = this.props.list.filter((shift) => {
            let position = shift.worker.position;
            return position === this.state.valueFilter;
        });*/
        let list = this.props.list;
        /*if(this.state.valueFilter !== ""){
            list = filteredList;
        }*/
        return(
            <div>
                {this.props.workers.length === 0 ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                ):(
                <MDBContainer>
                    <MDBRow end>
                        <MDBCol size="3">
                            <select className="form-control" name="position" onChange={(event)=>this.setState({valueFilter: event.target.value})}>
                                <option value="">Ver solo...</option>
                                {positions.map((position, index) => {
                                    return <option key={index} value={position}>{position}</option>;
                                    })
                                }
                            </select>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <MDBCard className="marginTop">
                                <MDBCardBody className="cardBody">
                                    <MDBRow>
                                        <MDBCol size="2">
                                            <MDBCardTitle>Turno</MDBCardTitle>
                                            <MDBContainer>
                                                <MDBListGroup>
                                                    {list.map((shift, index)=>{
                                                        return <MDBListGroupItem key={index}>{shift.shift_types_id}</MDBListGroupItem>;
                                                        })
                                                    }
                                                </MDBListGroup>
                                            </MDBContainer>
                                        </MDBCol>
                                        <MDBCol size="3">
                                            <MDBCardTitle>Horario</MDBCardTitle>
                                            <MDBContainer>
                                                <MDBListGroup>
                                                    {list.map((shift, index)=>{
                                                        return <MDBListGroupItem key={index}>{
                                                            shift.shift_types_id
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
                                                    {list.map((shift, index)=>{
                                                        let worker = this.props.workers.find((worker) => {return worker.id === shift.users_id});
                                                        return(
                                                            <MDBListGroupItem key={index}>
                                                                {worker.f_name + " " + worker.l_name}
                                                            </MDBListGroupItem>
                                                            );
                                                        })
                                                    }
                                                </MDBListGroup>
                                            </MDBContainer>
                                        </MDBCol>
                                        <MDBCol size="3">
                                            <MDBCardTitle>Tarea</MDBCardTitle>
                                            <MDBContainer>
                                                <MDBListGroup>
                                                    {list.map((shift, index)=>{
                                                        return <MDBListGroupItem key={index}>{shift.task}</MDBListGroupItem>;
                                                        })
                                                    }
                                                </MDBListGroup>
                                            </MDBContainer>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                )}
            </div>
        );
    }
}

export default ListShifts;