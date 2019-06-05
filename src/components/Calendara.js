import React, { Component } from "react";
import 'react-infinite-calendar/styles.css';
import InfiniteCalendar, { Calendar, defaultMultipleDateInterpolation, withMultipleDates } from 'react-infinite-calendar';
import Moment from 'moment';
//import moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export default class MyCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date,
            list: []
        };
        this.testFunc = this.testFunc.bind(this);
    }

    onChange = date => this.setState({ date });

    getTurns = (date) => {
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
        fetch(url,
            {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": "Token " + localStorage.getItem('token')
			    }
            })
            .then((response) => {return response.json()})
            .then((responseJSON) => {console.log(responseJSON);
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
        });
        return ret;
    }
    testFunc(e) {
        this.props.date2(e);
        window.location="/day";
    }
    render() {
        let days = this.getDate(this.state.list);
        return (
            <div>    
                {(this.state.list.length === 0 ) ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                ):(
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
                )
                }
            </div>
        );
    }
}
