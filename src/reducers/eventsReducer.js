import update from 'immutability-helper';
import {
    FETCH_EVENTS_BEGIN,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE,
    SET_START_DATE,
    SET_END_DATE
  } from './../actions/eventsAction';
  
  const initialState = {
    items: [],
    start: null,
    end: null,
    loading: false,
    error: null
  };

  export default function eventReducer(state = initialState, action) {
    //console.log(action.type)
    switch(action.type) {
      case FETCH_EVENTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_EVENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.events
        };
  
      case FETCH_EVENTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
        
      case SET_START_DATE: 
        const { start_date } = action
        return update(state, {
          start : {$set: start_date }
        })

      case SET_END_DATE: 
        const { end_date } = action
        return update(state, {
          end : {$set: end_date }
        })

      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }
  