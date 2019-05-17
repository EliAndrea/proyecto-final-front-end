import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBFormInline, MDBIcon } from "mdbreact";

class ListWorkers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: this.props.list,
            query: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.clickDeleteWorker = this.clickDeleteWorker.bind(this);
    }
    //Función para realizar busqueda
    handleInputChange(event){
        this.setState({
            query: event.target.value,
            });
    }
    //Función para eliminar trabajadores en lista completa
    clickDeleteWorker(worker){
        let list = this.state.list;
        let index = list.indexOf(worker);
        list.splice(index, 1);
        this.setState({list: list});
    }

    render() {
        const filteredList = this.props.list.filter(element => {
            let name = element.firstName + " " + element.lastName;
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
                            {this.state.list.map((worker, index) => {
                                return( 
                                    <MDBListGroupItem key={index}>
                                        <span onClick={()=>{this.props.show(worker)}} className="link">{worker.firstName + " " + worker.lastName}</span>
                                        <span className="link"><MDBIcon className="icon" icon="trash" 
                                            onClick={()=>{this.clickDeleteWorker(worker)}}/>
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
                                        <span onClick={()=>{this.props.show(worker)}} className="link">{worker.firstName  + " " + worker.lastName}</span>
                                        <span className="link"><MDBIcon className="icon" icon="trash" 
                                        onClick={()=>{this.clickDeleteWorker(worker)}}/>
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