import React from 'react';
import MyNavbar from '../components/Navbar.js';
import ListShifts from '../components/ListShifts.js';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import { Context } from '../context/themeProvider.js';

const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
registerLocale('es', es);

class UserDay extends React.Component{
    constructor(){
        super();
        this.state = {
            date: new Date(),
            shiftsList: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (date) => {
        this.setState({date: date}, ()=>{this.getShifts(this.state.date)});
    }
    componentDidMount(){
        this.getShifts(this.state.date);
    }
    
    getShifts = (date) => {
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if(day < 10){
            day = "0" + day;
        }
        if(month < 10){
            month = "0" + month;
        }
        date = date.getFullYear() + "-" + month + "-" + day;
        let url = "https://3000-ba1b8683-b649-4439-93c8-37c62bff3b47.ws-us0.gitpod.io/api/shifts/" + date;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((responseJSON) => {
                this.setState({shiftsList: responseJSON});
            });
    }
    render(){
        let date = this.state.date;
        return (
            <div>
                <MyNavbar user_type="user"/>
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
                        return <ListShifts list={this.state.shiftsList} models={context.models} actions={context.actions}/>;
                        }
                    }
                </Context.Consumer>
            </div>
            );
    }
}

export default UserDay;