import React from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBBtn} from 'mdbreact';
import MyNavbar from '../components/Navbar.js';
import ListWorkers from '../components/List.js';
import FormWorkers from '../components/Form.js';

const positions = ["Agente encubierto", "Mascota", "Mago"];

const workers = [
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

class Workers extends React.Component{
    constructor(){
        super();
        this.state = {
            list: workers,
            form: "",
            titulo: "",
            position: "Cargo",
            worker: {}
        };
        this.clickAddWorker = this.clickAddWorker.bind(this);
        this.clickShowWorker = this.clickShowWorker.bind(this);
        this.clickEditWorker = this.clickEditWorker.bind(this);
        this.clickSaveChanges = this.clickSaveChanges.bind(this);
    }
    //Función para mostrar formulario de añadir trabajador
    clickAddWorker(){
        this.setState({
            form: "addWorker",
            titulo: "Agregar nuevo trabajador",
            worker: {}
        });
    }
    //Función para mostrar formularios con datos de trabajador
    clickShowWorker(worker){
        this.setState({
            form: "showWorker",
            titulo: "Datos trabajador",
            worker: worker
        });
    }
    //Función para mostrar formularios para editar datos de trabajador seleccionado
    clickEditWorker(worker){
        this.setState({
            form: "editWorker",
            titulo: "Editar datos trabajador",
            worker: worker
        });
    }
    //Función para diferenciar entre añadir nuevo usuario u actualizar usuario existente
    clickSaveChanges(newWorker){
        if(this.state.form === "addWorker"){
            //console.log(newWorker);
            //console.log("Añadiendo nuevo usuario");
            let newList = this.state.list;
            newList.push(newWorker);
            this.setState({list: newList});
        }
        else{
            console.log(newWorker);
            console.log("Actualizando datos de usuario");
        }
    }
    render(){
        let worker = this.state.worker;
        return(
            <div>
                <MyNavbar className= "navbar"/>
                <MDBContainer>
                    <MDBRow around>
                        <MDBCol sm="12" lg="4">
                            <ListWorkers list={this.state.list} show={this.clickShowWorker} edit={this.clickEditWorker}/>
                            <div className="btnRight">
                                <MDBBtn color="deep-purple" size="sm" onClick={this.clickAddWorker}>Nuevo Trabajador</MDBBtn>
                            </div>
                        </MDBCol>
                        <MDBCol sm="12" lg="7">
                            {this.state.form !== "" &&
                                <FormWorkers titulo={this.state.titulo} firstName={worker.firstName} lastName={worker.lastName} 
                                    email={worker.email} phone={worker.phone} position={worker.position} positionsOptions={positions}
                                    button={this.clickSaveChanges} worker={worker}/>
                            }
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            
        );
    }
}

export default Workers;
