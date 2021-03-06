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
                localStorage.removeItem('token');
                localStorage.removeItem('admin');
                localStorage.removeItem('isAuthenticated');
                localStorage.removeItem('name');
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
                <Navbar light expand="md" className="navbar-dark bg-dark">
                    <NavbarBrand href="/"><i className="fas fa-calendar-alt fa-2x"></i> Turno x Turno</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <span className="text-white mt-2 mr-2">{localStorage.getItem('name')}</span>
                            {admin &&
                            <React.Fragment>
                                <NavItem>
                                    <NavLink href="/workers"><i className="fas fa-users"></i> Trabajadores</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/menu"><i className="fas fa-cogs"></i> Menu</NavLink>
                                </NavItem>
                            </React.Fragment>
                            }
                            <NavItem>
                                <NavLink onClick={this.logout} href="/login"><i className="fas fa-sign-out-alt"></i> Cerrar Sesión</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MyNavbar;
