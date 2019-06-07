import React from "react";
import { MDBContainer, MDBAlert, MDBCol, MDBRow, MDBCloseIcon } from 'mdbreact';

const Alert = (props) => {
    return (
        <MDBContainer className="mt-3">
            <MDBRow center>
                <MDBCol sm="12" lg={props.sizeLg}>
                    <MDBAlert color={props.color}>
                        <MDBCloseIcon onClick={props.closeAlert}/>
                        <h4 className="alert-heading">{props.title}</h4>
                        <p>{props.text}</p>
                    </MDBAlert>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Alert;