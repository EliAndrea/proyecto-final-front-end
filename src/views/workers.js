import React from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBBtn} from 'mdbreact';
import { MyNavbar } from '../components/Navbar.js';
import ListWorkers from '../components/List.js';
import FormWorkers from '../components/Form.js';

const positions = ["Agente encubierto", "Mascota", "Mago"];

const workers = [
        {
            id: 1,
            firstName: "Chewy",
            lastName: "Asdf",
            email: "chewy@asdf.cl",
            phone: "+12345667",
            position: positions[0]
        },
        {
            id: 2,
            firstName: "Bilbo",
            lastName: "Asdf",
            email: "bilbito@asdf.com"
        },
        {
            id: 3,
            firstName: "Yoshi",
            lastName: "Asdf",
            email: "yoshi@asdf.com"
        },
        {
            id: 4,
            firstName: "Gandalf",
            lastName: "Asdf",
            email: "thewhite@asdf.com"
        }];

class Workers extends React.Component{
    constructor(){
        super();
        this.state = {
            addWorker: false,
            showWorker: false,
            editWorker: false,
            titulo: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            position: "Cargo"
        };
        this.clickAddWorker = this.clickAddWorker.bind(this);
        this.clickShowWorker = this.clickShowWorker.bind(this);
        this.clickEditWorker = this.clickEditWorker.bind(this);
        this.clickSaveChanges = this.clickSaveChanges.bind(this);
    }
    //Función para mostrar formulario de añadir trabajador
    clickAddWorker(){
        this.setState({
            addWorker: true,
            showWorker: false,
            editWorker: false,
            titulo: "Agregar nuevo trabajador",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            position: "Cargo"
        });
    }
    //Función para mostrar formularios con datos de trabajador
    clickShowWorker(index){
        this.setState({
            addWorker: false,
            showWorker: true,
            editWorker: false,
            titulo: "Datos trabajador",
            firstName: workers[index].firstName,
            lastName: workers[index].lastName,
            email: workers[index].email,
            phone: workers[index].phone,
            position: workers[index].position
        });
    }
    //Función para mostrar formularios para editar datos de trabajador seleccionado
    clickEditWorker(index){
        this.setState({
            addWorker: false,
            showWorker: false,
            editWorker: true,
            titulo: "Editar datos trabajador",
            firstName: workers[index].firstName,
            lastName: workers[index].lastName,
            email: workers[index].email,
            phone: workers[index].phone,
            position: workers[index].position
        });
        
    }
    //Función para diferenciar entre añadir nuevo usuario u actualizar usuario existente
    clickSaveChanges(){
        if(this.state.addWorker){
            console.log("Añadiendo nuevo usuario");
        }
        else{
            console.log("Actualizando datos de usuario");
        }
    }
    render(){
        let form;
        //Renderizar formulario para mostrar datos, agregar trabajador o editar datos
        if(this.state.showWorker){
            form = <FormWorkers titulo={this.state.titulo} firstName={this.state.firstName} lastName={this.state.lastName} 
                        email={this.state.email} phone={this.state.phone} position={this.state.position} positionsOptions={positions}
                        button={this.clickSaveChanges}/>;
        }
        else if(this.state.addWorker){
            form = <FormWorkers titulo={this.state.titulo} position={this.state.position} positionsOptions={positions} button={this.clickSaveChanges}/>;
        }
        else if(this.state.editWorker){
            form = <FormWorkers titulo={this.state.titulo} position={this.state.position} positionsOptions={positions} button={this.clickSaveChanges}/>;
        }
        return(
            <div>
                <MyNavbar className= "navbar"/>
                <MDBContainer>
                    <MDBRow around>
                        <MDBCol sm="12" lg="4">
                            <ListWorkers list={workers} show={this.clickShowWorker} edit={this.clickEditWorker}/>
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
