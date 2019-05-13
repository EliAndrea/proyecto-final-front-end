import React from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import { MyNavbar } from '../components/Navbar.js';
import ListWorkers from '../components/List.js';
import FormWorkers from '../components/Form.js';

class Workers extends React.Component{
    render(){
        return(
            <div>
                <MyNavbar className= "navbar"/>
                <MDBContainer>
                    <MDBRow around>
                        <MDBCol sm="12" lg="4">
                            <ListWorkers />
                        </MDBCol>
                        <MDBCol sm="12" lg="7">
                            <MDBCard className="formWorkers">
                                <MDBCardBody>
                                    <MDBCardTitle>Agregar nuevo trabajador</MDBCardTitle>
                                    <FormWorkers />
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            
        );
    }
}

export default Workers;
