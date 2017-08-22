import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const {buttonContent, onClick} = this.props;
    return (
      <button
        className="isoButton isoBtnSm"
        onClick={onClick}>
        {buttonContent}
      </button>
    );
  }
}
