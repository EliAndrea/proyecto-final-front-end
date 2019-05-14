import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBFormInline, MDBIcon, } from "mdbreact";

export default class ListWorkers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: this.props.list,
            query: "",
            filteredList: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.clickDeleteWorker = this.clickDeleteWorker.bind(this);
        this.clickDeleteWorkerFilter = this.clickDeleteWorkerFilter.bind(this);
    }
    //Función para realizar busqueda
    handleInputChange(event){
        let listNames = [];
        this.props.list.forEach((item)=>listNames.push(item.firstName + " " + item.lastName));
        let query = event.target.value;
        const filteredList = listNames.filter(element => {
            return element.toLowerCase().includes(query.toLowerCase());
        });
        this.setState({
            query: query,
            filteredList: filteredList
            });
        console.log(filteredList)
        console.log(this.state.filteredList)
    }
    //Función para eliminar trabajadores en lista completa
    clickDeleteWorker(index, arr){
        arr.splice(index, 1);
        this.setState({list: arr});
    }
    //Función para eliminar trabajadores desde lista filtrada
    clickDeleteWorkerFilter(index, arr){
        let deleted = arr.splice(index, 1);
        let newList = [];
        this.state.list.forEach((worker)=>{
            if (worker != deleted){
                newList.push(worker);
            }
        });
        this.setState({
            list: newList,
            filteredList: arr
        });
    }
    
    render() {
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
                                        <span onClick={()=>{this.props.show(index)}} className="link">{worker.firstName + " " + worker.lastName}</span>
                                        <span className="link"><MDBIcon className="icon" icon="trash" onClick={()=>{this.clickDeleteWorker(index, this.state.list)}}/>
                                        </span>
                                        <span className="link"><MDBIcon className="icon" icon="edit" onClick={()=>{this.props.edit(index)}}/></span>
                                    </MDBListGroupItem>
                                );
                            })}
                        </MDBListGroup>
                        ):(
                        <MDBListGroup>
                            {this.state.filteredList.map((worker, index) => {
                                return( 
                                    <MDBListGroupItem key={index}>
                                        <span onClick={()=>{this.props.show(index)}} className="link">{worker}</span>
                                        <span className="link"><MDBIcon className="icon" icon="trash" 
                                        onClick={()=>{this.clickDeleteWorkerFilter(index, this.state.filteredList)}}/>
                                        </span>
                                        <span className="link"><MDBIcon className="icon" icon="edit"/></span>
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