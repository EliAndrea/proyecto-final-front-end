import React from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBBtn} from 'mdbreact';
import MyNavbar from '../components/Navbar.js';
import ListWorkers from '../components/ListWorkers.js';
import FormWorkers from '../components/Form.js';
import {Context} from '../context/themeProvider.js';

class Workers extends React.Component{
    constructor(){
        super();
        this.state = {
            form: "empty",
            titulo: "",
            worker: {}
        };
        this.clickAddWorker = this.clickAddWorker.bind(this);
        this.clickShowWorker = this.clickShowWorker.bind(this);
        this.clickEditWorker = this.clickEditWorker.bind(this);
    }
    //Función para mostrar formulario de añadir trabajador
    clickAddWorker = () =>{
        this.setState({
            form: "addWorker",
            titulo: "Agregar nuevo trabajador",
            worker: {
                f_name: "",
                l_name: "",
                email: "",
                phone_number: "",
            }
        });
    }
    //Función para mostrar formularios con datos de trabajador
    clickShowWorker = (worker) => {
        this.setState({
            form: "showWorker",
            titulo: "Datos trabajador",
            worker: worker
        });
    }
    //Función para mostrar formularios para editar datos de trabajador seleccionado
    clickEditWorker = (worker) =>{
        this.setState({
            form: "editWorker",
            titulo: "Editar datos trabajador",
            worker: worker
        });
    }
    hideForm = () => {
        this.setState({
           form: "empty",
           worker: {}
        });
    }
    render(){
        return(
            <Context.Consumer>
                {(context) => {
                    return (
                        <div>
                            <MyNavbar className= "navbar" user_type="admin"/>
                            <MDBContainer>
                                <MDBRow around>
                                    <MDBCol sm="12" lg="4">
                                        <ListWorkers models={context.models} actions={context.actions} 
                                            show={this.clickShowWorker} edit={this.clickEditWorker} />
                                        <div className="btnRight">
                                            <MDBBtn color="deep-purple" size="sm" onClick={this.clickAddWorker}>Nuevo Trabajador</MDBBtn>
                                        </div>
                                    </MDBCol>
                                    <MDBCol sm="12" lg="7">
                                        {this.state.form !== "empty" &&
                                            <FormWorkers titulo={this.state.titulo} positions={context.models.positions} form={this.state.form}
                                            worker={Object.assign({}, this.state.worker)} actions={context.actions} hide={this.hideForm} />
                                        }
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>
                    )}
                }
            </Context.Consumer>
        );
    }
}

export default Workers;