import React from "react";
import ReactDOM from "react-dom";
import MarkerList from "./components/markers";
import DateRange from "./components/datePicker"
import Map from "./components/map"
import SelectedMarker from "./components/selected"
import BannerForm from "./components/form"
import FormInfo from "./components/formInfo"

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

class App extends React.Component {
  render(){  
    return (
      <div className="App">
        <div className="left">
          <Provider store={store}><DateRange /></Provider>
          <Provider store={store}><SelectedMarker /></Provider>
          <Provider store={store}><MarkerList /></Provider>
        </div>

        <div className="right" aria-label="map-section" aria-hidden="true">
          <Provider store={store}><Map /></Provider>
        </div>

        <div className="bottom">
          <div className="container">
            <FormInfo />
            <Provider store={store}><BannerForm /></Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
