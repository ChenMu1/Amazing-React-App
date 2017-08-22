import React, { Component } from 'react';

export default class extends Component {
  render() {
    const value = this.props.value || 'Please include Config';
    return (
      <div className="isoEmptyComponent">
        <span>
          {value}
        </span>
      </div>
    );
  }
}
