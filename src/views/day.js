import React from 'react';
import MyNavbar from '../components/Navbar.js';
import CardShifts from '../components/CardShifts.js';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";

const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
registerLocale('es', es);

class Day extends React.Component{
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
                <h1 className="h1-responsive">{date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear()}</h1>
                <DatePicker onChange={this.handleChange} placeholderText="Seleccione otra fecha" locale="es"/>
                <CardShifts />
            </div>
            );
    }
}

export default Day;