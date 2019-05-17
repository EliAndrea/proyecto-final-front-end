import React from 'react';
import MyNavbar from '../components/Navbar.js';
import ListShifts from '../components/ListShifts.js';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';

const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
registerLocale('es', es);

class UserDay extends React.Component{
    constructor(){
        super();
        this.state = {
            date: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            date: date
        });
    }
    render(){
        let date = this.state.date;
        return (
            <div>
                <MyNavbar />
                <MDBContainer>
                    <MDBRow className="marginTop">
                        <MDBCol size="3">
                            <h1 className="h1-responsive">{date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear()}</h1>
                        </MDBCol>
                        <MDBCol size="3">
                            <DatePicker onChange={this.handleChange} placeholderText="Seleccione otra fecha" locale="es"/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <ListShifts />
            </div>
            );
    }
}

export default UserDay;