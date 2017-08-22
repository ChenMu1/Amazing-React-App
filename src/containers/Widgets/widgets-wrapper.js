import React, { Component } from 'react';

export default class IsoWidgetsWrapper extends Component {
  render() {
    const {
      width,
      gutterTop,
      gutterRight,
      gutterBottom,
      gutterLeft,
      padding,
      bgColor,
      children,
    } = this.props;
    const wrapperStyle = {
      width: width,
      marginTop: gutterTop,
      marginRight: gutterRight,
      marginBottom: gutterBottom,
      marginLeft: gutterLeft,
      padding: padding,
      backgroundColor: bgColor,
    };

    return (
      <div className="isoWidgetsWrapper" style={wrapperStyle}>
        {children}
      </div>
    );
  }
}
