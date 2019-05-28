import React, {Component} from "react";
import 'react-infinite-calendar/styles.css';
import './Calendara.css';
import InfiniteCalendar, {Calendar, defaultMultipleDateInterpolation, withMultipleDates, withRange} from 'react-infinite-calendar';
import Moment from 'moment';
//import moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);


  const shifts = 
      
      [
       {
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
    const end   = new Date(moment(shifts[0].date_end, "YYYY-MM-DD").toDate());
    const range = moment.range(start, end);
    

    
    
export default class MyCalendar extends Component {
  constructor(){
    super();
      this.state = {
          date: new Date(),
        }
    }
  
  onChange = date => this.setState({ date });

  render() {

    const days = Array.from(range.by('days')).map((item) => item.toDate());
        console.log(days)
      

//console.log(start);  
//console.log(range[0]);

    return (
        <InfiniteCalendar ClassName="center"
          locale={{
            weekdays:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],
            weekStartsOn: 1
          }}
            Component={withMultipleDates(Calendar)}
              selected={days}
              
            interpolateSelection={defaultMultipleDateInterpolation}
          width={1200}
          height={600}
        />
      );
  }
}