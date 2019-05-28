import React from 'react';
import MyNavbar from '../components/Navbar.js';
import CardShifts from '../components/CardShifts.js';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import { Context } from '../context/themeProvider.js';

const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
registerLocale('es', es);

class Day extends React.Component{
    constructor(){
        super();
        this.state = {
            date: new Date(),
            shiftList: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    //Función que permite seleccionar otro día
    handleChange = (date) => {
        this.setState({date: date});
    }
    render(){
        let date = this.state.date;
        return (
            <div>
                <MyNavbar user_type="admin"/>
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
                <Context.Consumer>
                    {(context) => {
                        return <CardShifts />
                    }
                }
                </Context.Consumer>
            </div>
            );
    }
}

export default Day;