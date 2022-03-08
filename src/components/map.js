import React, { Component } from 'react'
import { connect } from "react-redux";
import { compose } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PropTypes from 'prop-types'

import { toggleSelect, setMarker } from "./../actions/markersAction";


const orange_marker = 'https://maps.google.com/mapfiles/ms/icons/orange.png'
const green_marker = 'https://maps.google.com/mapfiles/ms/icons/green.png'
const blue_marker = 'https://maps.google.com/mapfiles/ms/icons/blue.png'

const CampusBannersMap = compose(
    withScriptjs, 
    withGoogleMap
    )(props => {
      return (
        <GoogleMap defaultZoom={17} defaultCenter={{lat:37.87215, lng:-122.257812}}  latLngBounds={{north: -122.262866, south: -122.258798, west: 37.870773, east: 37.870760}} >
            {props.markers.map(marker => {
                const onClick = props.onClick.bind(this, marker)
                return (
                    <Marker 
                    key={marker.id}
                    position={{lat:parseFloat(marker.lat, 10), lng:parseFloat(marker.lng, 10)}} 
                    onClick={onClick}
                    icon={marker.icon}
                    >
                    </Marker>
                )
            })}
        </GoogleMap>
      )
    } 
)   



class Map extends Component {
    onMarkerSelect = (m) => {
        let data = [m.id, (m.sel === false) ? true : false]
        this.props.toggleSelect(data)
        

        let marker = m
        if(marker.icon.indexOf('-dot') == -1) { //if does not have dot
            marker.icon = marker.icon.slice(0, -4) + '-dot' + marker.icon.slice(-4)
        } else {
            marker.icon = marker.icon.slice(0, -8) + marker.icon.slice(-4)
        }
        let data2 = [marker.id, marker.icon]
        this.props.setMarker(data2)
    } 

    render() {
        const { error, loading, markers } = this.props

        if (error) {
            return <div>Error! {error.message}</div>
          }
      
        if (loading) {
        return <div>Loading...</div>
        }

        return(
         <div className="campus-map">
         <h3>2. Click on a marker to select a banner. This is a Google map and you are able to use normal Google map functionality. Be sure to check out the street view!</h3>
          <CampusBannersMap
           googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBeNjH2b1nQ7b7TGQz-KWE5OrrZLNCrZy8&v=4.exp&libraries=geometry,drawing,places"
           loadingElement={<div style={{height: `100%`}} />}
           containerElement={<div style={{height: `100%`, width: '100%'}} />}
           mapElement={<div style={{height: `100%`}} />}
           markers={markers}
           onClick={this.onMarkerSelect}
          />
          <div className="map-key">
            <ul>
                <li><img src="https://maps.google.com/mapfiles/ms/icons/blue.png" alt="blue marker icon"/><label>Banner Location</label></li>
                <li><img src="https://maps.google.com/mapfiles/ms/icons/green.png" alt="green marker icon"/><label>Banner Available During Chosen Date Range</label></li>
                <li><img src="https://maps.google.com/mapfiles/ms/icons/orange.png" alt="orange marker icon"/><label>Banner Un-Available During Chosen Date Range</label></li>
            </ul>
            <ul>
                <li><img src="https://maps.google.com/mapfiles/ms/icons/blue-dot.png" alt="blue marker icon with dot"/><label>Selected Banner</label></li>
                <li><img src="https://maps.google.com/mapfiles/ms/icons/green-dot.png" alt="green marker icon with dot"/><label>Banner Available & Selected During Chosen Date Range</label></li>
                <li><img src="https://maps.google.com/mapfiles/ms/icons/orange-dot.png" alt="orange marker icon with dot"/><label>Banner Un-Available & Selected During Chosen Date Range</label></li>            
            </ul>
          </div>
          </div>
        )
    }
}



const mapStateToProps = state => ({
    markers: state.markers.items,
    selected_marker: state.markers.selected_marker,
    loading: state.markers.loading,
    error: state.markers.error
});

const mapDispatchToProps = dispatch => {
    return {
        toggleSelect: (data) => dispatch(toggleSelect(data)),
        setMarker: (data) => dispatch(setMarker(data))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Map);