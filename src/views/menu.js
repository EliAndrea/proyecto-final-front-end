import React from 'react';
import TypeShifts from '../components/TypeShifts.js';
import Positions from '../components/Positions.js';
import MyNavbar from '../components/Navbar.js';
import { MDBContainer } from 'mdbreact';
import {Tabs, Tab} from 'react-bootstrap';
import {Context} from '../context/themeProvider.js';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'shifts',
        };
    }

    render() {
        return (
            <div>
                <MyNavbar className= "navbar" admin={localStorage.getItem('admin')}/>
                <MDBContainer className="mt-3">
                    <Context.Consumer>
                    {context => {
                        return (
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={this.state.key}
                                onSelect={key => this.setState({ key })}
                              >
                                <Tab eventKey="shifts" title="Turnos">
                                  <TypeShifts listTypes={context.models.shiftsTypes} updateTypes={context.actions.updateShiftsTypes}/>
                                </Tab>
                                <Tab eventKey="positions" title="Cargos">
                                    <Positions positions={context.models.positions} updatePositions={context.actions.updatePositions}/>
                                </Tab>
                            </Tabs>
                        );
                    }}
                    </Context.Consumer>
                </MDBContainer>
            </div>
        );
    }
}

export default Menu;