import React, { Component } from 'react';

export default class PaginationControl extends Component {
  render() {
    return (
      <div className="isoMailPagination">
        <button type="button" className="prevPage">
          <i className="ion-ios-arrow-back" />
        </button>

        <button type="button" className="nextPage">
          <i className="ion-ios-arrow-forward" />
        </button>
      </div>
    );
  }
}
