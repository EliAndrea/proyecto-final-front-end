import React, { Component } from "react";
import 'react-infinite-calendar/styles.css';
import './Calendara.css';
import InfiniteCalendar, { Calendar, defaultMultipleDateInterpolation, withMultipleDates, withRange } from 'react-infinite-calendar';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);




export default class MyCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date,
            list: []
        }
        this.testFunc = this.testFunc.bind(this)
    }

    onChange = date => this.setState({ date });


    testFunc(e) {
        this.props.date2(e);
        window.location="https://proyecto-final-ryoko5.c9users.io/day";
    }
    render() {
        /*const days = Array.from(range.by('days')).map((item) => item.toDate());
        console.log(days)
        
*/      
        //console.log(start);  
        //console.log(range[0]);
        return (
            <InfiniteCalendar className="c"
         locale={{
           weekdays:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],
           weekStartsOn: 1
         }}
             selected={null}

           interpolateSelection={defaultMultipleDateInterpolation}
         width={"100%"}
         height={600}

         onSelect={this.testFunc}

         theme={{
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
