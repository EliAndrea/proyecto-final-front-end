import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBRow, MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact';

class ListShifts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valueFilter: "",
            filteredList: []
        };
        this.addShift = this.addShift.bind(this);
    }
    addShift(newShift){
        let list = this.state.list;
        list.push(newShift);
        this.setState({shifts: list});
    }
    componentDidMount(){
        this.props.actions.updateWorkersList();
        this.props.actions.updateShiftsTypes();
        this.props.actions.updatePositions();
    }
    
    render(){
        let workers = this.props.models.workersList;
        let types = this.props.models.shiftsTypes;
        let positions = this.props.models.positions;
        let list = this.props.list;
        if(this.state.valueFilter !== "" && workers.length !== 0){
            let filteredList = list.filter((shift) => {
            let worker = workers.find((worker) => {return worker.id === shift.users_id});
            return worker.positions_id == this.state.valueFilter;
            });
            list = filteredList;
        }
        return(
            <div>
                {(workers.length === 0) || (types.length === 0) ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                ):(
                <MDBContainer>
                    <MDBRow end>
                        <MDBCol size="3">
                            <select className="form-control" name="position" onChange={(event)=>this.setState({valueFilter: event.target.value})}>
                                <option value="">Todos</option>
                                {positions.map((position, index) => {
                                    return <option key={index} value={position.id}>{position.position_name}</option>;
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
                                                        let type = types.find((type) => {return type.id === shift.shift_types_id}); 
                                                        return <MDBListGroupItem key={index}>{type.shift_name}</MDBListGroupItem>;
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
                                                        let type = types.find((type) => {return type.id === shift.shift_types_id});
                                                        return (<MDBListGroupItem key={index}>
                                                            {type.shift_start + " - " + type.shift_end}
                                                            </MDBListGroupItem>);
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
                                                        let worker = workers.find((worker) => {return worker.id === shift.users_id});
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