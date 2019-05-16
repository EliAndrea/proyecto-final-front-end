import React from 'react';
import './App.css';  
import Login from "./components/login.jsx";
function App() {
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

export default App;
