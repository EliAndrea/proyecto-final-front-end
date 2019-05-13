import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBFormInline, MDBIcon } from "mdbreact";

const workers = [
        {
            firstName: "Chewy",
            lastName: "Asdf"
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

export default class ListWorkers extends React.Component {
    constructor(){
        super();
        this.state = {
            list: workersList,
            query: "",
            filteredList: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
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
                                return <MDBListGroupItem href="#" key={index}>{worker}</MDBListGroupItem>;
                            })}
                        </MDBListGroup>
                        ):(
                        <MDBListGroup>
                            {this.state.filteredList.map((worker, index) => {
                                return <MDBListGroupItem href="#" key={index}>{worker}</MDBListGroupItem>;
                            })}
                        </MDBListGroup>
                        )}
                    </MDBContainer>
               </div>
        );
    }
}