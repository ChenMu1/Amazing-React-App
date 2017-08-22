import React, { Component } from 'react';
import { connect } from 'react-redux';
import DesktopView from './desktopView';
import MobileView from './mobileView';

class InstantSearch extends Component {
  render() {
    const { view } = this.props;
    const View = view !== 'MobileView' ? DesktopView : MobileView;
    return (
      <div style={{ height: '100%' }}>
        <View />
      </div>
    );
  }
}
export default connect(state => ({
  view: state.App.toJS().view
}))(InstantSearch);
