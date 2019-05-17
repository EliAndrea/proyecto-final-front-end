import React from 'react';
import { MDBCol, MDBRow, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';

const shiftsTypes = [{name: "Día", beggin: "8:00", ending: "20:00"}, {name: "Noche", beggin: "20:00", ending: "8:00"}];
const workers = ["Chewy", "Bilbo", "Ranita", "Monito", "Yoshi"];

class AddShifts extends React.Component{
    constructor(){
        super();
        this.state = {
            shift: {}
        };
        this.selectShift = this.selectShift.bind(this);
    }
    selectShift(event){
        
    }
    
    render(){
        let index = shiftsTypes.indexOf(this.state.shiftType);
        console.log("index" + index);
        console.log(this.state.shiftType);
        return(
            <div className="inputShift">
                <MDBRow center>
                    <MDBCol size="2">
                        <div className="form-group">
                            <label className="label-shifts" for="">Tipo Turno</label>
                            <select className="form-control" onChange={(e)=>this.selectShift(e)}>
                                {shiftsTypes.map((shift, index)=>{ console.log(shift);
                                    return <option value={shift} key={index}>{shift.name}</option>;
                                    })
                                }
                            </select>
                        </div>
                    </MDBCol>
                    <MDBCol size="4">
                        <div className="form-group">
                            <label className="label-shifts" for="">Trabajador</label>
                            <select className="form-control" name="worker">
                                {workers.map((worker, index) => {
                                    return <option key={index}>{worker}</option>;
                                })}
                            </select>
                        </div>
                    </MDBCol>
                    <MDBCol size="3">
                        <MDBInput label="Tarea" />
                    </MDBCol>
                </MDBRow>
                <div className="btnRight">
                <MDBBtn color="light-blue" onClick={this.clickNew}>Agregar Turno<MDBIcon icon="user-plus" className="ml-2" /></MDBBtn>
                </div>
            </div>
        );
    }
}

export default AddShifts;