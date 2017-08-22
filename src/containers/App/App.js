import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { Debounce } from 'react-throttle';
import { WindowResizeListener } from 'react-window-resize-listener';
import authAction from '../../redux/auth/actions';
import { toggleAll } from '../../redux/app/reducer';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import AppRouter from './AppRouter';
import './App.css';

const { Content, Footer } = Layout;
const { logout } = authAction;

export class App extends Component {
  render() {
    const { url } = this.props.match;
    return (
      <LocaleProvider locale={enUS}>
        <Layout style={{ height: '100vh' }}>
          <Debounce time="1000" handler="onResize">
            <WindowResizeListener
              onResize={windowSize =>
                this.props.toggleAll(
                  windowSize.windowWidth,
                  windowSize.windowHeight,
                )}
            />
          </Debounce>
          <Topbar url={url} />
          <Layout style={{ flexDirection: 'row' }}>
            <Sidebar url={url} />
            <Layout style={{ height: '100vh' }}>
              <Content
                style={{
                  padding: '70px 0 0',
                  flexShrink: '0',
                  background: '#f1f3f6',
                }}>
                <AppRouter url={url} />
              </Content>
              <Footer
                style={{
                  background: '#ffffff',
                  textAlign: 'center',
                  borderTop: '1px solid #ededed',
                }}>
                Isomorphic ©2017 Created by RedQ, Inc
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </LocaleProvider>
    );
  }
}

export default connect(
  state => ({
    auth: state.Auth,
  }),
  { logout, toggleAll },
)(App);
