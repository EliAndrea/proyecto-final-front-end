import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBFormInline, MDBIcon } from "mdbreact";
 

export default class ListWorkers extends React.Component {
    constructor(){
        super();
        this.state = {
            list: ["chewy", "bilbo", "yoshi", "gandalf"],
        };
    }
    render() {
        let workers = this.state.list;
        return (
                <div>
                    <MDBFormInline className="md-form">
                        <MDBIcon icon="search" />
                            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                    </MDBFormInline>
                    <MDBContainer>
                        <MDBListGroup>
                            {workers.map((worker, index) => {
                                return <MDBListGroupItem href="#">{worker}</MDBListGroupItem>;
                            })}
                        </MDBListGroup>
                    </MDBContainer>
               </div>
        );
    }
}