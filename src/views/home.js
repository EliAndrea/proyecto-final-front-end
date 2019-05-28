import React from 'react';
import MyNavbar from '../components/Navbar.js';
import { Context } from '../context/themeProvider.js';

class Home extends React.Component{
    render(){
        return(
            <Context.Consumer>
            {(context) => {
                return (
                context.models.admin ?
                <MyNavbar user_type="admin"/>
                :
                <MyNavbar user_type="user"/>                    
                )}
            }
            </Context.Consumer>
            );
    }
}

export default Home;