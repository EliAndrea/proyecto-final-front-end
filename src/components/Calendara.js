import React, { Component } from "react";
import 'react-infinite-calendar/styles.css';
import './Calendara.css';
import InfiniteCalendar, { Calendar, defaultMultipleDateInterpolation, withMultipleDates, withRange } from 'react-infinite-calendar';
import Moment from 'moment';
//import moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);


const shifts =

    [{
            date_start: "2019-05-21",
            date_end: "2019-05-25",
            users_id: 3,
            shift_types_id: 13,
            task: "cuarto (20-25/05)",
            id: 12
        },
        {
            date_start: "2019-05-20",
            date_end: "2019-05-25",
            users_id: 1,
            shift_types_id: 1,
            task: "cuarto",
            id: 13
        },
        {
            date_start: "2019-05-20",
            date_end: "2019-05-25",
            users_id: 2,
            shift_types_id: 13,
            task: "cuarto",
            id: 14
        }
    ];

const start = new Date(moment(shifts[0].date_start, "YYYY-MM-DD").toDate());
const end = new Date(moment(shifts[0].date_end, "YYYY-MM-DD").toDate());
const range = moment.range(start, end);




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

    getTurns = (date) => {
        let id = 2
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        date = date.getFullYear() + "-" + month;
        let url = "http://localhost:8000/api/shifts/user/" + date;
        let data = {
            "id": id,
            "date": date
        }
        fetch(url)
            .then((response) => {return response.json()})
            .then((responseJSON) => {console.log(responseJSON)
                this.setState({list:responseJSON});
            });
    }

    componentDidMount() {
        this.getTurns(this.state.date);
    }
    getDate(list){
        let ret = [];
        list.forEach((item) => {
            const start = new Date(moment(item.date_start, "YYYY-MM-DD").toDate());
            const end = new Date(moment(item.date_end, "YYYY-MM-DD").toDate());
            const range = moment.range(start, end);
            const days = Array.from(range.by('days')).map((day) => day.toDate());
            console.log(days);
            ret = ret.concat(days);
        })
        return ret;
    }
    testFunc(e) {
        this.props.date2(e);
        window.location="/day";
    }
    render() {
        const days = this.getDate(this.state.list)
        /*const days = Array.from(range.by('days')).map((item) => item.toDate());
        console.log(days)
        
*/      console.log("hola" + this.props.date)
        console.log(this.state.list)
        //console.log(start);  
        //console.log(range[0]);
        return (
            <InfiniteCalendar className="c"
          locale={{
            weekdays:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],
            weekStartsOn: 1
          }}
            Component={withMultipleDates(Calendar)}
              selected={days}
              
            interpolateSelection={defaultMultipleDateInterpolation}
          width={"100%"}
          height={600}
          
          onSelect={this.testFunc}
        />
        );
    }
}
