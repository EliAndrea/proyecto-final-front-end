import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/admin/home/">Volver al Calendario</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {this.props.user_type === "admin" ? (
                        <NavItem>
                            <NavLink href="/workers/">Trabajadores</NavLink>
                        </NavItem>
                        ):(
                        <NavItem>
                            <NavLink href="#">Cambio de Turno</NavLink>
                        </NavItem>
                        )}
                        <NavItem>
                            <NavLink href="/">Mi Perfil</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Cerrar Sesión</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
  }
}

export default MyNavbar;