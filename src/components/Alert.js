import React from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';

const Alert = (props) => {
  return (
    <MDBContainer>
      <MDBAlert color="success">
        <h4 className="alert-heading">{props.title}</h4>
        <p>{props.text}</p>
      </MDBAlert>
    </MDBContainer>
  );
};

export default Alert;