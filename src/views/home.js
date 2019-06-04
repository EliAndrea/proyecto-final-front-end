import React from 'react';
import MyNavbar from '../components/Navbar.js';
import { Context } from '../context/themeProvider.js';
import MyCalendar from '../components/Calendara.js'
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import MyCalendarAd from '../components/Calendarad.js'

class Home extends React.Component{
    render(){
        let admin = false;
        if (localStorage.getItem('admin') === "true"){
            admin = true;
        }
        return(
            <Context.Consumer>
            {(context) => {
                return (
                    admin ? (
                        <div>
                            <MyNavbar admin={localStorage.getItem('admin')}/>
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol size="12">
                                        <div>
                                            <MyCalendarAd className="center" date = {context.models.date} date2 = {context.actions.dateUpdate}/>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>
                        ):(
                        <div>
                            <MyNavbar admin={localStorage.getItem('admin')}/> 
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol size="12">
                                        <div>
                                            <MyCalendar className="center" date = {context.models.date} date2 = {context.actions.dateUpdate}/>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>
                        )
                    );
                }
            }
            </Context.Consumer>
        );
    }
}

export default Home;