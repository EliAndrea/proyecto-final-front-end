import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBRow, MDBContainer, MDBListGroup, MDBListGroupItem, MDBIcon  } from 'mdbreact';

class ListShifts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valueFilter: "",
            filteredList: []
        };
    }
    componentDidMount(){
        this.props.actions.updateWorkersList();
        this.props.actions.updateShiftsTypes();
        this.props.actions.updatePositions();
    }
    //Función para eliminar turno
    deleteShift = (id) => {
        console.log(id);
        let url = "http://127.0.0.1:8000/api/shifts/" + id;
		fetch(url, 
		{
		    method: 'DELETE',
		    headers: {
				"Content-Type": "application/json",
				"Authorization": "Token " + localStorage.getItem('token')
			}
		})
		    .then((resp)=> {
		        console.log(resp);
		        this.props.refresh(this.props.date);
		    })
		    .catch((err)=>{alert(err)});
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
        let admin = false;
        if (localStorage.getItem('admin') === "true"){
            admin = true;
        }
        return(
            <div className="text-center">
                {(workers.length === 0 && (types.length === 0)) ? (
                <div className="spinner-border text-primary mt-5" role="status">
                    <span className="sr-only">Cargando...</span>
                </div>
                ):(
                <MDBContainer>
                    <MDBCard className="marginTop">
                        <MDBRow className="mt-3">
                            <MDBCol size="4">
                                <select className="form-control marginLeft" name="position" onChange={(event)=>this.setState({valueFilter: event.target.value})}>
                                    <option value="">Todos</option>
                                    {positions.map((position, index) => {
                                        return <option key={index} value={position.id}>{position.position_name}</option>;
                                        })
                                    }
                                </select>
                            </MDBCol>
                        </MDBRow>
                        <MDBCardBody className="text-center">
                            <MDBRow>
                                <MDBCol size="2">
                                    <MDBCardTitle>Turno</MDBCardTitle>
                                    <MDBListGroup>
                                        {list.map((shift, index)=>{
                                            let type = types.find((type) => {return type.id === shift.shift_types_id}); 
                                            return type !== undefined ? <MDBListGroupItem key={index}>{type.shift_name}</MDBListGroupItem> : null;
                                            })
                                        }
                                    </MDBListGroup>
                                </MDBCol>
                                <MDBCol size="3">
                                    <MDBCardTitle>Horario</MDBCardTitle>
                                    <MDBListGroup>
                                        {list.map((shift, index)=>{
                                            let type = types.find((type) => {return type.id === shift.shift_types_id});
                                                    return type !== undefined ? <MDBListGroupItem key={index}>
                                                    {type.shift_start.substr(0, 5) + " - " + type.shift_end.substr(0, 5)}
                                                </MDBListGroupItem> : null; 
                                            })
                                        }
                                    </MDBListGroup>
                                </MDBCol>
                                <MDBCol size="3">
                                    <MDBCardTitle>Trabajador</MDBCardTitle>
                                    <MDBListGroup>
                                        {list.map((shift, index)=>{
                                            let worker = workers.find((worker) => {return worker.id === shift.users_id});
                                            return worker !== undefined ?
                                                    <MDBListGroupItem key={index}>
                                                        {worker.last_name + " " + worker.first_name}
                                                    </MDBListGroupItem>
                                                : null;
                                            })
                                        }
                                    </MDBListGroup>
                                </MDBCol>
                                <MDBCol size="3">
                                    <MDBCardTitle>Tarea</MDBCardTitle>
                                        <MDBListGroup>
                                            {list.map((shift, index)=>{
                                                return <MDBListGroupItem key={index} className="iconContainer">{shift.task}</MDBListGroupItem>;
                                                })
                                            }
                                        </MDBListGroup>
                                </MDBCol>
                                {admin &&
                                <MDBCol size="1">
                                    <MDBCardTitle className= "title"></MDBCardTitle>
                                    <MDBListGroup>
                                        {list.map((shift, index)=>{
                                            return <MDBListGroupItem key={index} className="iconContainer">
                                            <MDBIcon className="link" icon="trash" onClick={()=>this.deleteShift(shift.id)} /></MDBListGroupItem>;
                                            })
                                        }
                                    </MDBListGroup>
                                </MDBCol>
                                }
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>
                )}
            </div>
        );
    }
}

export default ListShifts;