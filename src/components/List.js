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
    handleInputChange(event){
        let query = event.target.value;
        this.setState(prevState => {
            const filteredList = prevState.list.filter(element => {
                return element.toLowerCase().includes(query.toLowerCase());
            });
            return {
                query,
                filteredList
            };
        });
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
                                        <span onClick={()=>{this.props.onClick(index)}} className="link">{worker}</span>
                                        <span className="link"><MDBIcon className="icon" icon="trash" onClick={()=>{this.clickDeleteWorker(index, this.state.list)}}/>
                                        </span>
                                        <span className="link"><MDBIcon className="icon" icon="edit"/></span>
                                    </MDBListGroupItem>
                                );
                            })}
                        </MDBListGroup>
                        ):(
                        <MDBListGroup>
                            {this.state.filteredList.map((worker, index) => {
                                return( 
                                    <MDBListGroupItem key={index}>
                                        <span onClick={()=>{this.props.onClick(index)}} className="link">{worker}</span>
                                        <span className="link"><MDBIcon className="icon" icon="trash" onClick={()=>{this.clickDeleteWorkerFilter(index, this.state.filteredList)}}/>
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