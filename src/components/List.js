import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBFormInline, MDBIcon } from "mdbreact";

class ListWorkers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: this.props.models.workersList,
            query: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    //Función para realizar búsqueda dentro de la lista de usuarios
    handleInputChange(event){
        this.setState({
            query: event.target.value,
            });
    }
    //Función para eliminar usuario de la base de datos
    deleteWorker = (id) => {
        console.log(id);
        let url = "https://3000-ba1b8683-b649-4439-93c8-37c62bff3b47.ws-us0.gitpod.io/api/users/" + id;
		fetch(url, {method: 'DELETE'})
		    .then((resp)=> {
		        console.log(resp);
		        this.props.actions.updateWorkersList();
		    })
		    .catch((err)=>{alert(err)});
	}
	//Se carga la lista de trabajadores
    componentDidMount(){
        this.props.actions.updateWorkersList();
        this.props.actions.updatePositions();
    }
    render() {
        let list = this.props.models.workersList;
        //Filtro de lista según carácteres ingresados en barra de búsqueda
        const filteredList = this.props.models.workersList.filter(element => {
            let name = element.f_name + " " + element.l_name;
            return name.toLowerCase().includes(this.state.query.toLowerCase());
        });
        return (
            <div>
                <MDBFormInline className="md-form">
                    <MDBIcon icon="search" />
                        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Buscar Trabajador" aria-label="Search" 
                        value={this.state.query} onChange={this.handleInputChange}/>
                </MDBFormInline>
                <MDBContainer>
                    {this.state.query === "" ? (
                    <MDBListGroup>
                        {list.map((worker, index) => {
                            return( 
                                <MDBListGroupItem key={index}>
                                    <span onClick={()=>{this.props.show(worker)}} className="link">{worker.f_name + " " + worker.l_name}</span>
                                    <span className="link"><MDBIcon className="icon" icon="trash" 
                                        onClick={()=>{this.deleteWorker(worker.id)}}/>
                                    </span>
                                    <span className="link"><MDBIcon className="icon" icon="edit" onClick={()=>{this.props.edit(worker)}}/></span>
                                </MDBListGroupItem>
                            );
                        })}
                    </MDBListGroup>
                    ):(
                    <MDBListGroup>
                        {filteredList.map((worker, index) => {
                            return( 
                                <MDBListGroupItem key={index}>
                                    <span onClick={()=>{this.props.show(worker)}} className="link">{worker.f_name  + " " + worker.l_name}</span>
                                    <span className="link"><MDBIcon className="icon" icon="trash" 
                                    onClick={()=>{this.deleteWorker(worker.id)}}/>
                                    </span>
                                    <span className="link"><MDBIcon className="icon" icon="edit" onClick={()=>{this.props.edit(worker)}}/></span>
                                </MDBListGroupItem>
                            );
                        })}
                    </MDBListGroup>
                    )}
                </MDBContainer>
           </div>
        );
    }
}

export default ListWorkers;