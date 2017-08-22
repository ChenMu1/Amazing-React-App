import React from 'react';

export default function marker(props) {
  const { item } = props;
  const markerIcon = item.marker.iconClass;
  const openInfoWindow = () => {
    const { infoWindow, item } = props;
    if (item.ID !== infoWindow.ID) return;
    return (
      <div className="isoInfoWindow">
        <div className="isoInfoWindowImage">
          <img alt="#" src={infoWindow.img} />
        </div>
        <div className="isoInfoWindowDetails">
          <h3 className="isoHeading">{infoWindow.title}</h3>
          <p className="isoLocation">{infoWindow.location}</p>
        </div>
        <button
          className="windowCloseBtn"
          onClick={() => props.closeInfoWindow()}
        >
          <i className="ion-android-close" />
        </button>
      </div>
    );
  };
  return (
    <div className="isoMarkerInfoWindow">
      <div className="marker-icon map-marker">
        <div className="marker-icon-wrapper">
          <i className={`${markerIcon}`} />
        </div>
      </div>
      <div>
        {props.infoWindow !== null ? openInfoWindow() : null}
      </div>
    </div>
  );
}
