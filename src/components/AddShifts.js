import React from 'react';
import { MDBCol, MDBRow, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBContainer } from 'mdbreact';

class AddShifts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shift: {
                shift_types_id: "",
                users_id: ""
            }
        };
        this.inputShift = this.inputShift.bind(this);
        this.inputWorker = this.inputWorker.bind(this);
    }
    inputShift = (event) => {
        let shiftTypeID = event.target.value;
        let shift = this.state.shift;
        shift.shift_types_id = shiftTypeID;
        this.setState({shift: shift});
        
    }
    inputWorker = (event) => {
        let shift = this.state.shift;
        shift.users_id = event.target.value;
        this.setState({shift: shift});    
    }
    inputTask = (event) => {
        let shift = this.state.shift;
        shift.task = event.target.value;
        this.setState({shift:shift});
    }
    checkShift = () => {
        let newShift = this.state.shift;
        if(this.state.shift.shift_types_id === "" || this.state.shift.users_id === ""){
            console.log("Debe seleccionar un horario y trabajador");
        }
        else{
            //Filtra la lista de turnos, buscando todos los turnos asignados al mismo trabajador en el día
            let filteredList = this.props.list.filter((shift) => {return shift.users_id == newShift.users_id});
            if(filteredList.length !== 0){
                //Busca dentro de los turnos del trabajador si ya tiene asignado el mismo tipo de turno 
                let shift = filteredList.find((shift) => {return shift.shift_types_id == newShift.shift_types_id});
                if(shift === undefined){
                    let shiftType = this.props.models.shiftsTypes.find((type)=>{return type.id == newShift.shift_types_id});
                    let newStart = this.timeInMin(shiftType.shift_start);
                    let newEnd = this.timeInMin(shiftType.shift_end);
                    for(let i=0; i < filteredList.length; i++){
                        let type = this.props.models.shiftsTypes.find((type)=>{return type.id == filteredList[i].shift_types_id});
                        let start = this.timeInMin(type.shift_start);
                        let end = this.timeInMin(type.shift_end);
                        if((newStart < end && newEnd > end) || (newStart < start && newEnd > start)){
                            console.log("El trabajador ya tiene asigando un turno en este mismo horario de trabajo");
                            return;
                        }
                    }
                    console.log("agregando turno");
                    this.addShift(newShift);
                    }
                else{
                    console.log("El trabajador ya tiene asignado este turno para el mismo día");
                }
            }
            else{
                console.log("agregando turno");
                this.addShift(newShift);
            }
        }
    }
    
    timeInMin = (time) =>{
        let arrTime = time.split(":");
        let hour = parseInt(arrTime[0]);
        let min = parseInt(arrTime[1]);
        let sum = hour * 60 + min;
        return sum;
    }
    
    addShift = (newShift) => {
        newShift.date_start = this.props.dateString(this.props.date);
        newShift.date_end = this.props.dateString(this.props.date);
        fetch("http://127.0.0.1:8000/api/shifts/", {
            method: 'POST',
            body: JSON.stringify(newShift),
            headers:{
                'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(response => {
                console.log(response);
                this.props.refresh(this.props.date);
            })
            .catch(error => console.error('Error:', error));
        }
    render(){
        let shiftsTypes = this.props.models.shiftsTypes;
        let workers = this.props.models.workersList;
        return(
            <MDBContainer className="inputShift">
                <MDBCard className="marginTop">
                    <MDBCardBody className="cardBody">
                        <MDBRow center>
                            <MDBCol size="2">
                                <div className="form-group">
                                    <label className="label-shifts">Tipo Turno</label>
                                    <select className="form-control" name="shift" onChange={this.inputShift}>
                                        <option value="">Seleccione...</option>
                                        {shiftsTypes.map((shiftType, index)=>{
                                            return <option value={shiftType.id} key={index}>{shiftType.shift_name}</option>;
                                            })
                                        }
                                    </select>
                                </div>
                            </MDBCol>
                            <MDBCol size="4">
                                <div className="form-group">
                                    <label className="label-shifts" >Trabajador</label>
                                    <select className="form-control" name="worker" onChange={this.inputWorker}>
                                        <option value="">Seleccione...</option>
                                        {workers.map((worker, index) => {
                                            return <option value={worker.id} key={index}>{worker.l_name + " " + worker.f_name}</option>;
                                        })}
                                    </select>
                                </div>
                            </MDBCol>
                            <MDBCol size="3">
                                <MDBInput label="Tarea (opcional)" onChange={this.inputTask}/>
                            </MDBCol>
                             <MDBCol size="3">
                                <div className="btnRight">
                                    <MDBBtn color="light-blue" onClick={this.checkShift}>Agregar Turno<MDBIcon icon="user-plus" className="ml-2" /></MDBBtn>
                                </div>
                            </MDBCol>    
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard> 
            </MDBContainer>
        );
    }
}

export default AddShifts;