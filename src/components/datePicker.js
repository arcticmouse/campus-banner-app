import React, { Component } from 'react'
import { connect } from "react-redux";
import DatePicker from 'react-datepicker'
import Moment from 'moment'
import MomentRange,{ extendMoment } from 'moment-range'
import 'react-datepicker/dist/react-datepicker.css'
import { fetchEvents, setStartDate, setEndDate } from "./../actions/eventsAction";
import { setAvailableMarker, setMarker } from "./../actions/markersAction";



const moment = extendMoment(Moment)
moment.locale('en_US')


const earliestdate = new Date()
      earliestdate.setDate(earliestdate.getDate() + 14)
      let what_earliest_day = earliestdate.getDay() //to check for the weekend
      if(what_earliest_day === 0) {
        earliestdate.setDate(earliestdate.getDate() + 1)
      } else if(what_earliest_day === 6) {
        earliestdate.setDate(earliestdate.getDate() + 2)
      }
const earliestenddate = new Date(earliestdate)
      earliestenddate.setDate(earliestenddate.getDate() + 1)
const lastdate = new Date()
      lastdate.setDate(earliestdate.getDate() + 366)
      let what_last_day = lastdate.getDay() //to check for weekend
      if(what_last_day === 0) {
        lastdate.setDate(lastdate.getDate() + 1)
      } else if(what_last_day === 6) {
        lastdate.setDate(lastdate.getDate() + 2)
      }

class DateRange extends Component {

    componentDidMount(){
        this.props.fetchEvents()
        this.props.setStartDate(earliestdate)
        this.props.setEndDate(earliestenddate)
    }

    onStartSelect = (start_date) => {
        this.props.setStartDate(start_date)
        
        let end_date = new Date(start_date)
        end_date.setDate(end_date.getDate() + 1)

        this.props.setEndDate(end_date)
    }

    onEndSelect = (end_date) => {
        this.props.setEndDate(end_date)

        let arr = []
        let choosen_range = moment.range(this.props.start, this.props.end)
        this.props.events.forEach((event) => {         
          let range = moment.range(event.start, event.end)
          if(!arr.includes(event.location)){ 
            if(range.overlaps(choosen_range)){
              arr.push(event.location)
            } 
          } 
        }) 

        let avail_markers = []
        this.props.markers.forEach((marker) => {
          let i = arr.indexOf(marker.num)
          if(i !== -1){
            if(marker.icon.indexOf('orange') == -1) {
              if(marker.icon.indexOf('dot') != -1) {
                this.props.setMarker([marker.id, 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png'])
              } else this.props.setMarker([marker.id, 'https://maps.google.com/mapfiles/ms/icons/orange.png'])
            }
            if(marker.avail != false) avail_markers.push([marker.id, false])
          } else {
            if(marker.icon.indexOf('green') == -1) {
              if(marker.icon.indexOf('dot') != -1) {
                this.props.setMarker([marker.id, 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'])
              } else this.props.setMarker([marker.id, 'https://maps.google.com/mapfiles/ms/icons/green.png'])
            }
            if(marker.avail != true) avail_markers.push([marker.id, true])
          }
        })

        avail_markers.forEach((marker_item) => { this.props.setAvailableMarker(marker_item) })
    }

    render(){
        const { error, loading, start, end } = this.props;

        if (error) {
          return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
          return <div>Loading...</div>;
        }

        return (
            <div className="date-range">
                <div className="start">
                    <strong>Choose your start date</strong>
                    <DatePicker
                        selected={start}
                        selectsStart
                        startDate={start}
                        //endDate={end}
                        onChange={this.onStartSelect}
                        minDate={start}
                        maxDate={lastdate}
                        dateFormat="MM/dd/yyyy"
                    />
                </div>
                <div className="end">
                    <strong>Choose your end date</strong>
                    <DatePicker
                        selected={end}
                        selectsEnd
                        //startDate={start}
                        endDate={end}
                        onChange={this.onEndSelect}
                        minDate={end}
                        maxDate={lastdate}
                        dateFormat="MM/dd/yyyy"
                    />
                </div>
            </div> 
        )
    }
}

const mapStateToProps = state => ({
    events: state.events.items,
    start: state.events.start,
    end: state.events.end,
    loading: state.events.loading,
    error: state.events.error,

    markers: state.markers.items,
})

const mapDispatchToProps = dispatch => {
    return {
      fetchEvents: () => dispatch(fetchEvents()),
      setStartDate: (start_date) => dispatch(setStartDate(start_date)),
      setEndDate: (end_date) => dispatch(setEndDate(end_date)),

      setAvailableMarker: (marker_item) => dispatch(setAvailableMarker(marker_item)),
      setMarker: (data) => dispatch(setMarker(data))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DateRange)