import React from 'react';
import '../App.css';  
import Login from "../components/login.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Button from 'react-bootstrap/Button';

function Alllogin() {
  return (
    <div className="App container-fluid ">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Login/>
        </div>
      </div>
    </div>
  );
}

export default Alllogin;
