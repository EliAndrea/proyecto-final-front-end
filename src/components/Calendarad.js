import React, { Component } from "react";
import 'react-infinite-calendar/styles.css';
import InfiniteCalendar, { defaultMultipleDateInterpolation } from 'react-infinite-calendar';
import { Redirect } from 'react-router-dom';

export default class  MyCalendarAd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date,
            list: [],
            redirect: false
        };
        this.testFunc = this.testFunc.bind(this);
    }

    testFunc(e) {
        this.props.date2(e);
        this.setState({redirect: true});
    }
    render() {
        let redirect;
        if(this.state.redirect){
            redirect = <Redirect to='/day' />;
        }
        return (
            <div>
                {redirect}
                <InfiniteCalendar className="mt-3"
                    locale=
                    {{
                        locale: require('date-fns/locale/es'),
                        weekdays:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],
                        weekStartsOn: 1,
                        todayLabel: {
                            long: 'Hoy',
                        }
                    }}
                    selected={null}
                    interpolateSelection={defaultMultipleDateInterpolation}
                    width={"100%"}
                    height={500}
                    onSelect={this.testFunc}
                    displayOptions={{
                        showHeader: false
                    }}
                    theme=
                    {{
                        selectionColor: 'rgb(146, 118, 255)',
                        textColor: {
                            default: '#333',
                            active: '#FFF'
                        },
                        weekdayColor: 'rgb(146, 118, 255)',
                        headerColor: 'rgb(127, 95, 251)',
                        floatingNav: {
                            background: 'rgba(81, 67, 138, 0.96)',
                            color: '#FFF',
                            chevron: '#FFA726'
                        }
                    }}
                />
            </div>
        );
    }
}
