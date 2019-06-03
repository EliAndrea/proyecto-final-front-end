import React from 'react';
import MyNavbar from '../components/Navbar.js';
import { Context } from '../context/themeProvider.js';

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
                admin ?
                <MyNavbar admin={localStorage.getItem('admin')}/>
                :
                <MyNavbar admin={localStorage.getItem('admin')}/>                    
                )}
            }
            </Context.Consumer>
            );
    }
}

export default Home;