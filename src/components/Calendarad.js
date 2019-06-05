import React, { Component } from "react";
import 'react-infinite-calendar/styles.css';
import InfiniteCalendar, { defaultMultipleDateInterpolation } from 'react-infinite-calendar';

export default class  MyCalendarAd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date,
            list: []
        };
        this.testFunc = this.testFunc.bind(this);
    }

    onChange = date => this.setState({ date });


    testFunc(e) {
        this.props.date2(e);
        window.location="/day";
    }
    render() {
        return (
            <InfiniteCalendar className="c"
                locale=
                {{
                    weekdays:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],
                    weekStartsOn: 1
                }}
                selected={null}
                interpolateSelection={defaultMultipleDateInterpolation}
                width={"100%"}
                height={600}
                onSelect={this.testFunc}
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
        );
    }
}
