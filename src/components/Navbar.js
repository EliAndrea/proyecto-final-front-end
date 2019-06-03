import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class MyNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    logout = () => {
        fetch("http://127.0.0.1:8000/api/logout/")
            .then(resp => {
                localStorage.removeItem('token')
                localStorage.removeItem('admin')
                return resp.json()})
            .catch(err => console.log(err));
    }
    render() {
        let admin;
        if (this.props.admin === "true"){
            admin = true;
        }
        else{
            admin = false;
        }        
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/home/">Volver al Calendario</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {admin && 
                            <NavItem>
                                <NavLink href="/workers/">Trabajadores</NavLink>
                            </NavItem>
                            }
                            <NavItem>
                                <NavLink href="/">Mi Perfil</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.logout} href="/">Cerrar Sesión</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MyNavbar;
