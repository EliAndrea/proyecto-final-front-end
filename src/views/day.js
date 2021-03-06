import React from 'react';
import MyNavbar from '../components/Navbar.js';
import ListShifts from '../components/ListShifts.js';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import { Context } from '../context/themeProvider.js';
import AddShifts from '../components/AddShifts.js';

const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
registerLocale('es', es);

class Day extends React.Component{
    constructor(){
        super();
        this.state = {
            date: new Date(),
            shiftsList: []
        };
        this.dateContext = null;
        this.handleChange = this.handleChange.bind(this);
        this.getShifts = this.getShifts.bind(this);
    }
    //Función que permite seleccionar otro día
    handleChange = (date) => {
        this.setState({date: date}, ()=>{this.getShifts(this.state.date)});
    }
    componentDidMount(){
        this.setState({date: this.dateContext.models.date});
        this.getShifts(this.dateContext.models.date);
    }
    dateYYYYMMDD = (date) => {
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if(day < 10){
            day = "0" + day;
        }
        if(month < 10){
            month = "0" + month;
        }
        date = date.getFullYear() + "-" + month + "-" + day;
        return date;
    } 
    
    getShifts = (date) => {
        let dateString = this.dateYYYYMMDD(date);
        let url = "http://127.0.0.1:8000/api/shifts/" + dateString;
        fetch(url,
        {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Token " + localStorage.getItem('token')
			}
		})
            .then((response) => {
                return response.json();
            })
            .then((responseJSON) => {
                this.setState({shiftsList: responseJSON});
            });
    }
    render(){
        let date = this.state.date;
        let admin = false;
        if (localStorage.getItem('admin') === "true"){
            admin = true;
        }
        return (
            <Context.Consumer>
                {(context) => {
                    this.dateContext = context;
                    return (
                        admin ? (
                        <div>
                            <MyNavbar admin={localStorage.getItem('admin')} />
                            <MDBContainer>
                                <MDBRow className="marginTop">
                                    <MDBCol>
                                        <h1 className="h1-responsive">{date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear()}</h1>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol>
                                        <DatePicker className="datePicker link" onChange={this.handleChange} placeholderText="Cambiar fecha" locale="es"/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                            <AddShifts list={this.state.shiftsList} models={context.models} date={this.state.date} refresh={this.getShifts} dateString={this.dateYYYYMMDD}/>
                            <ListShifts list={this.state.shiftsList} models={context.models} actions={context.actions} refresh={this.getShifts} date={this.state.date}/>
                        </div>
                        ):(
                        <div>
                            <MyNavbar admin={localStorage.getItem('admin')}/>
                            <MDBContainer>
                                    <MDBCol size="3">
                                        <h1 className="h1-responsive">{date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear()}</h1>
                                    </MDBCol>
                                    <MDBRow>
                                        <MDBCol size="3">
                                            <DatePicker className="datePicker link" onChange={this.handleChange} placeholderText="Cambiar fecha" locale="es"/>
                                        </MDBCol>
                                    </MDBRow>
                            </MDBContainer>
                            <ListShifts list={this.state.shiftsList} models={context.models} actions={context.actions}/>
                        </div>
                        )
                    )}
                }
            </Context.Consumer>
        );
    }
}

export default Day;