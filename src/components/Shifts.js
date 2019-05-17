import React from 'react';
import { MDBCol, MDBRow, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';

const shiftsTypes = [{name: "Día", beggin: "8:00", ending: "20:00"}, {name: "Noche", beggin: "20:00", ending: "8:00"}];
const workers = ["Chewy", "Bilbo", "Ranita", "Monito", "Yoshi"];

class AddShifts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shift: {
                shiftType: shiftsTypes[0],
                worker: "Chewy"
            }
        };
        this.inputShift = this.inputShift.bind(this);
        this.inputWorker = this.inputWorker.bind(this);
    }
    inputShift(event){
        let name = event.target.value
        let shiftTypeSelected = shiftsTypes.find((obj) => {return obj.name === name});
        let shift = this.state.shift;
        shift.shiftType = shiftTypeSelected;
        this.setState({shift: shift});
        
    }
    inputWorker(event){
        let shift = this.state.shift;
        shift.worker = event.target.value;
        this.setState({shift: shift});    
    }
    render(){
        let newShift = this.state.shift
        return(
            <div className="inputShift">
                <MDBRow center>
                    <MDBCol size="2">
                        <div className="form-group">
                            <label className="label-shifts">Tipo Turno</label>
                            <select className="form-control" name="shift" onChange={this.inputShift}>
                                {shiftsTypes.map((shift, index)=>{console.log(shift)
                                    return <option value={shift.name} key={index}>{shift.name}</option>;
                                    })
                                }
                            </select>
                        </div>
                    </MDBCol>
                    <MDBCol size="4">
                        <div className="form-group">
                            <label className="label-shifts" >Trabajador</label>
                            <select className="form-control" name="worker" onChange={this.inputWorker}>
                                {workers.map((worker, index) => {
                                    return <option value={worker} key={index}>{worker}</option>;
                                })}
                            </select>
                        </div>
                    </MDBCol>
                    <MDBCol size="3">
                        <MDBInput label="Tarea" />
                    </MDBCol>
                </MDBRow>
                <div className="btnRight">
                <MDBBtn color="light-blue" onClick={()=>this.props.func({ ...newShift })}>Agregar Turno<MDBIcon icon="user-plus" className="ml-2" /></MDBBtn>
                </div>
                {console.log(this.state.shift.shiftType)}
            </div>
        );
    }
}

export default AddShifts;