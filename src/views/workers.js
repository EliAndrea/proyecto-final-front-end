import React from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBBtn} from 'mdbreact';
import MyNavbar from '../components/Navbar.js';
import ListWorkers from '../components/ListWorkers.js';
import FormWorkers from '../components/FormWorkers.js';
import {Context} from '../context/themeProvider.js';
import Alert from '../components/Alert.js';

class Workers extends React.Component{
    constructor(){
        super();
        this.state = {
            form: "empty",
            titulo: "",
            worker: {},
            showAlert: false,
            color: "",
            title: "",
            textAlert: ""
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
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                positions_id: ""
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
    showAlertSuccess = (msg) => {
        this.setState({
           showAlert: true,
             color: "success",
            title: "Cambios guardados",
            textAlert: msg
        });
    }
    closeAlert = () => {
        this.setState({showAlert:false});
    }
    render(){
        let msgAlert;
        if(this.state.showAlert){
            msgAlert =
            <div className="mt-5">
            <Alert color={this.state.color} title={this.state.title} text={this.state.textAlert} closeAlert={this.closeAlert} sizeLg="12"/>
            </div>;
        }
        return(
            <Context.Consumer>
                {(context) => {
                    return (
                        <div>
                            <MyNavbar className= "navbar" admin={localStorage.getItem('admin')}/>
                            <MDBContainer>
                                <MDBRow around>
                                    <MDBCol sm="12" lg="4">
                                        <ListWorkers models={context.models} actions={context.actions} 
                                            show={this.clickShowWorker} edit={this.clickEditWorker} />
                                        <div className="text-right">
                                            <MDBBtn className="white-text mt-3 mr-0" color="mdb-color" size="sm" onClick={this.clickAddWorker}>Nuevo Trabajador</MDBBtn>
                                        </div>
                                    </MDBCol>
                                    <MDBCol sm="12" lg="7">
                                        {msgAlert}
                                        {this.state.form !== "empty" &&
                                            <FormWorkers titulo={this.state.titulo} form={this.state.form} worker={Object.assign({}, this.state.worker)} 
                                            actions={context.actions} hide={this.hideForm} models={context.models} alert={this.showAlertSuccess}/>
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