import request from 'superagent'
import moment from 'moment'
import { extendMoment } from 'moment-range'

let url = `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events?key=${process.env.REACT_APP_CALENDAR_API_KEY}`

function getEvents() {
    return new Promise(function(resolve, reject){
        request
        .get(url)
        .accept('json')
        .end((err, resp) => {
            if (!err) {
                let events = []
                let today = moment().format('YYYY-MM-DD')
                JSON.parse(resp.text).items.forEach((event) => {
                    if(today < event.end.date || today < event.end.dateTime) {
                        events.push({
                        start: event.start.date || event.start.dateTime,
                        end: event.end.date || event.end.dateTime,
                        title: event.summary,
                        location: event.location
                        })
                    }//if event not in past
                })
                resolve(events)
            } else reject(err)
        })
    })
}
  
export function fetchEvents() {
    return dispatch => {
        dispatch(fetchEventsBegin());
        return getEvents()
        .then(json => {
            dispatch(fetchEventsSuccess(json));
            return json;
        })
        .catch(error =>
            dispatch(fetchEventsFailure(error))
        )
    }
}

export const FETCH_EVENTS_BEGIN = "FETCH_EVENTS_BEGIN";
export const FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS";
export const FETCH_EVENTS_FAILURE = "FETCH_EVENTS_FAILURE";

export const fetchEventsBegin = () => ({
    type: FETCH_EVENTS_BEGIN
})

export const fetchEventsSuccess = events => ({
    type: FETCH_EVENTS_SUCCESS,
    payload: { events }
})

export const fetchEventsFailure = error => ({
    type: FETCH_EVENTS_FAILURE,
    payload: { error }
})



export const SET_START_DATE = "SET_START_DATE"
export const SET_END_DATE = "SET_END_DATE"

export const setStartDate = start_date => ({
    type: SET_START_DATE,
    start_date
})

export const setEndDate = end_date => ({
    type: SET_END_DATE,
    end_date
})