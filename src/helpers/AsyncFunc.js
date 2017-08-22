import React, { Component } from 'react';
import Nprogress from 'nprogress';
import ReactPlaceholder from 'react-placeholder';
import 'nprogress/nprogress.css';
import 'react-placeholder/lib/reactPlaceholder.css';

export default function asyncComponent(importComponent) {
  class AsyncFunc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }
    componentWillMount() {
      Nprogress.start();
    }
    async componentDidMount() {
      const { default: Component } = await importComponent();
      Nprogress.done();
      this.setState({
        component: <Component {...this.props} />
      });
    }

    render() {
/*       const Component = this.state.component || <div />;
      return (
        <ReactPlaceholder type="text" rows={7} ready={Component !== null}>
          {Component}
        </ReactPlaceholder>
      ); */
      console.log(this.state.component, 'insided');
      const config = {
        Component: this.state.component,
        props: this.props,
        holderComponent: 'asyncFunc',
      };
    }
  }
  return AsyncFunc;
}
