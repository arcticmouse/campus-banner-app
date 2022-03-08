import { combineReducers } from "redux";
import markers from "./markersReducer";
import events from "./eventsReducer";
import form from "./formReducer"

export default combineReducers({
    markers,
    events,
    form
});