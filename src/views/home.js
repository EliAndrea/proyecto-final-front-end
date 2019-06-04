import React from 'react';
import MyNavbar from '../components/Navbar.js';
import { Context } from '../context/themeProvider.js';
import MyCalendar from '../components/Calendara.js'
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import MyCalendarAd from '../components/Calendarad.js'

class Home extends React.Component{
    render(){
        return(
            <Context.Consumer>
            {(context) => {
                return (
                
                context.models.admin ?
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="12">
                            <div>
                                <MyNavbar user_type="admin"/>
                                <MyCalendarAd className="center" date = {context.models.date} date2 = {context.actions.dateUpdate}/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                :
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="12">
                            <div>
                                <MyNavbar user_type="user"/>
                                <MyCalendar className="center" date = {context.models.date} date2 = {context.actions.dateUpdate}/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                )}
            }
            </Context.Consumer>
            );
    }
}

export default Home;