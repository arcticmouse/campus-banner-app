import React from "react";
import { connect } from "react-redux";


class SelectedMarker extends React.Component {

  avail_dates() {
    if(this.props.events[this.props.selected_marker]) return 'Reserved until ' + this.props.events[this.props.selected_marker].end
    if(this.props.markers[this.props.selected_marker].avail) return 'Available now'
  }

  render() {
    const { error, loading, markers, selected_marker } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (selected_marker || selected_marker === 0) {
      let pole_img = './inc/img/' + markers[selected_marker].img
      return (
        <div className="selected-marker">
          <img src={pole_img} alt="image of banner post"></img>  
          <div>
            <h3>{markers[selected_marker].num} - {markers[selected_marker].name}</h3>      
            <p>{this.avail_dates()}</p>
          </div>
        </div>
      )
    }
    return (
      <div className="selected-marker"></div>
    )
  }
}    

const mapStateToProps = state => ({
    markers: state.markers.items,
    loading: state.markers.loading,
    error: state.markers.error,
    selected_marker: state.markers.selected_marker,
    events: state.events.items
 });

export default connect(mapStateToProps)(SelectedMarker);