import React, { Component } from 'react';
import { connect } from 'react-redux';
import { posts } from '../config.js';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker.js';
import { googleConfig } from '../../../../config';
class BasicMap extends Component {
  constructor(props) {
    super(props);
    this.allMarkers = this.allMarkers.bind(this);
    this.boundsChange = this.boundsChange.bind(this);
    this.childMouseEnter = this.childMouseEnter.bind(this);
    this.childMouseLeave = this.childMouseLeave.bind(this);
    this.childClick = this.childClick.bind(this);
    this.closeInfoWindow = this.closeInfoWindow.bind(this);
    this.state = {
      center: [-41.2865, 174.7762], // 40.783060, -73.971249
      zoom: 13,
      posts,
      infoWindow: null,
    };
  }
  boundsChange(center, zoom, bounds, marginBounds) {
    this.setState({ center: { lat: center[0], lng: center[1] }, zoom });
  }
  childMouseEnter = (key, childProps) => {
    const { posts } = this.state;
    posts.map((post, index) => {
      if (post.ID + '' === key + '') {
        posts[index].hover = true;
      }
      return null;
    });
    this.setState({ posts });
  };
  childMouseLeave = (key, childProps) => {
    const { posts } = this.state;
    posts.map((post, index) => {
      if (post.ID + '' === key + '') {
        posts[index].hover = false;
      }
      return null;
    });
    this.setState({ posts });
  };
  childClick = (key, childProps) => {
    console.log(key, childProps);
    const { posts } = this.state;
    let childId = null;
    posts.map((post, index) => {
      if (post.ID + '' === key + '') {
        childId = index;
      }
      return null;
    });
    this.setState({
      infoWindow: posts[childId],
      center: { lat: posts[childId].lat, lng: posts[childId].lng },
    });
  };
  closeInfoWindow = () => {
    this.setState({ infoWindow: null });
  };
  allMarkers(post) {
    const { infoWindow } = this.state;
    return (
      <Marker
        lat={post.lat}
        lng={post.lng}
        item={post}
        key={post.ID}
        infoWindow={infoWindow}
        closeInfoWindow={this.closeInfoWindow}
      />
    );
  }
  render() {
    return (
      <div className="isoGoogleMap" style={{ height: '650px', width: '100%' }}>
        <GoogleMapReact
          defaultZoom={this.props.zoom}
          onBoundsChange={this.boundsChange}
          onChildClick={this.childClick}
          center={this.state.center}
          bootstrapURLKeys={{
            key: googleConfig.apiKey,
          }}>
          {this.state.posts.length
            ? this.state.posts.map(this.allMarkers)
            : null}
        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    center: { lat: -41.2865, lng:  174.7762 }, // 40.783060, -73.971249
    zoom: 13,
  };
}
export default connect(mapStateToProps, {})(BasicMap);
