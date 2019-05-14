import React from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBBtn} from 'mdbreact';
import { MyNavbar } from '../components/Navbar.js';
import ListWorkers from '../components/List.js';
import FormWorkers from '../components/Form.js';

const workers = [
        {
            firstName: "Chewy",
            lastName: "Asdf",
            email: "chewy@asdf.cl",
            phone: "+12345667",
            position: "Agente encubierto"
        },
        {
            firstName: "Bilbo",
            lastName: "Asdf"
        },
        {
            firstName: "Yoshi",
            lastName: "Asdf"
        },
        {
            firstName: "Gandalf",
            lastName: "Asdf"
        }];
let workersList = [];
workers.forEach((worker)=>{workersList.push(worker.firstName + " " + worker.lastName)});

class Workers extends React.Component{
    constructor(){
        super();
        this.state = {
            addWorker: false,
            showWorker: false,
            titulo: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            position: "Cargo"
        };
        this.clickAddWorker = this.clickAddWorker.bind(this);
        this.clickShowWorker = this.clickShowWorker.bind(this);
    }
    clickAddWorker(){
        this.setState({
            addWorker: true,
            titulo: "Agregar nuevo trabajador",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            position: "Cargo"
        });
    }
    clickShowWorker(index){
        this.setState({
            showWorker: true,
            titulo: "Datos Trabajador",
            firstName: workers[index].firstName,
            lastName: workers[index].lastName,
            email: workers[index].email,
            phone: workers[index].phone,
            position: workers[index].position
        });
    }
    render(){
        let form;
        //Renderizar formulario para mostrar datos o agregar trabajador
        if(this.state.showWorker){
            form = <FormWorkers titulo={this.state.titulo} firstName={this.state.firstName} lastName={this.state.lastName} 
                        email={this.state.email} phone={this.state.phone} position={this.state.position} />;
        }
        else if(this.state.addWorker){
            form = <FormWorkers titulo={this.state.titulo} />;
        }    
        return(
            <div>
                <MyNavbar className= "navbar"/>
                <MDBContainer>
                    <MDBRow around>
                        <MDBCol sm="12" lg="4">
                            <ListWorkers list={workersList} onClick={this.clickShowWorker}/>
                            <div className="btnNew">
                                <MDBBtn color="deep-purple" size="sm" onClick={this.clickAddWorker}>Nuevo Trabajador</MDBBtn>
                            </div>
                        </MDBCol>
                        <MDBCol sm="12" lg="7">
                            {form}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            
        );
    }
}

export default Workers;
