import React, { Component } from 'react';
import { connect } from 'react-redux';
import clone from 'clone';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import Menu from '../../components/uielements/menu';
import {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed
} from '../../redux/app/reducer';
import Logo from '../../components/utility/logo';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Sider } = Layout;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
  }
  handleClick(e) {
    this.props.changeCurrent(e.key);
    if (this.props.app.view === 'MobileView') {
      this.props.toggleCollapsed();
      this.props.toggleOpenDrawer();
    }
  }
  onOpenChange(newOpenKeys) {
    const { app, changeOpenKeys } = this.props;
    const latestOpenKey = newOpenKeys.find(
      key => !(app.openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = app.openKeys.find(
      key => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    changeOpenKeys(nextOpenKeys);
  }
  getAncestorKeys = key => {
    const map = {
      sub3: ['sub2']
    };
    return map[key] || [];
  };

  render() {
    const { url, app, toggleOpenDrawer } = this.props;
    const collapsed = clone(app.collapsed) && !clone(app.openDrawer);
    const { openDrawer } = app;
    const mode = collapsed === true ? 'vertical' : 'inline';
    const onMouseEnter = event => {
      if (openDrawer === false) {
        toggleOpenDrawer();
      }
      return;
    };
    const onMouseLeave = () => {
      if (openDrawer === true) {
        toggleOpenDrawer();
      }
      return;
    };
    const scrollheight = app.height;
    return (
      <Sider
        trigger={null}
        collapsible={true}
        collapsed={collapsed}
        width="240"
        className="isomorphicSidebar"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Logo collapsed={collapsed} />
        <Scrollbars style={{ height: scrollheight - 70 }}>
          <Menu
            onClick={this.handleClick}
            theme="dark"
            mode={mode}
            openKeys={app.openKeys}
            selectedKeys={[app.current]}
            onOpenChange={this.onOpenChange}
            className="isoDashboardMenu"
          >
            <Menu.Item key="email">
              <Link to={`${url}/mailbox`}>
                <span className="isoMenuHolder">
                  <i className="ion-android-mail" />
                  <span className="nav-text">Email</span>
                </span>
              </Link>
            </Menu.Item>

            <SubMenu
              key="ecommerce"
              title={
                <span className="isoMenuHolder">
                  <i className="ion-bag" />
                  <span className="nav-text">Ecommerce</span>
                </span>
              }
            >
              <Menu.Item key="shop">
                <Link to={`${url}/shop`}>Shop</Link>
              </Menu.Item>
              <Menu.Item key="cart">
                <Link to={`${url}/cart`}>Cart</Link>
              </Menu.Item>
              <Menu.Item key="checkout">
                <Link to={`${url}/checkout`}>Checkout</Link>
              </Menu.Item>
              <Menu.Item key="card">
                <Link to={`${url}/card`}>Cards</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu
              key="map"
              title={
                <span className="isoMenuHolder">
                  <i className="ion-map" />
                  <span className="nav-text">Maps</span>
                </span>
              }
            >
              <Menu.Item key="google">
                <Link to={`${url}/googlemap`}>Google Map</Link>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="calendar">
              <Link to={`${url}/calendar`}>
                <span className="isoMenuHolder">
                  <i className="ion-calendar" />
                  <span className="nav-text">Calendar</span>
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="notes">
              <Link to={`${url}/notes`}>
                <span className="isoMenuHolder">
                  <i className="ion-clipboard" />
                  <span className="nav-text">Notes</span>
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="todo">
              <Link to={`${url}/todo`}>
                <span className="isoMenuHolder">
                  <i className="ion-android-list" />
                  <span className="nav-text">Todo</span>
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="contacts">
              <Link to={`${url}/contacts`}>
                <span className="isoMenuHolder">
                  <i className="ion-android-person-add" />
                  <span className="nav-text">Contacts</span>
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="shuffle">
              <Link to={`${url}/shuffle`}>
                <span className="isoMenuHolder">
                  <i className="ion-grid" />
                  <span className="nav-text">Shuffle</span>
                </span>
              </Link>
            </Menu.Item>

            <SubMenu
              key="charts"
              title={
                <span className="isoMenuHolder">
                  <i className="ion-arrow-graph-up-right" />
                  <span className="nav-text">Charts</span>
                </span>
              }
            >
              <Menu.Item key="googleChart">
                <Link to={`${url}/googleChart`}>Google Chart</Link>
              </Menu.Item>
              <Menu.Item key="reecharts">
                <Link to={`${url}/reecharts`}>Reecharts</Link>
              </Menu.Item>
              <Menu.Item key="reactVis">
                <Link to={`${url}/reactVis`}>ReactVis</Link>
              </Menu.Item>
              <Menu.Item key="reactChart2">
                <Link to={`${url}/reactChart2`}>React-Chart-2</Link>
              </Menu.Item>
              <Menu.Item key="reactTrend">
                <Link to={`${url}/reactTrend`}>React-Trend</Link>
              </Menu.Item>
              <Menu.Item key="echart">
                <Link to={`${url}/echart`}>EChart</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu
              key="Forms"
              title={
                <span className="isoMenuHolder">
                  <i className="ion-android-mail" />
                  <span className="nav-text">Forms</span>
                </span>
              }
            >
              <Menu.Item key="InputField">
                <Link to={`${url}/InputField`}>Input</Link>
              </Menu.Item>
              <Menu.Item key="editor">
                <Link to={`${url}/editor`}>Editor</Link>
              </Menu.Item>
              <Menu.Item key="FormsWithValidation">
                <Link to={`${url}/FormsWithValidation`}>
                  Forms With Validation
                </Link>
              </Menu.Item>
              <Menu.Item key="progress">
                <Link to={`${url}/progress`}>Progress</Link>
              </Menu.Item>
              <Menu.Item key="button">
                <Link to={`${url}/button`}>Button</Link>
              </Menu.Item>
              <Menu.Item key="tab">
                <Link to={`${url}/tab`}>Tab</Link>
              </Menu.Item>
              <Menu.Item key="checkbox">
                <Link to={`${url}/checkbox`}>Checkbox</Link>
              </Menu.Item>
              <Menu.Item key="radiobox">
                <Link to={`${url}/radiobox`}>Radiobox</Link>
              </Menu.Item>
              <Menu.Item key="transfer">
                <Link to={`${url}/transfer`}>Transfer</Link>
              </Menu.Item>
              <Menu.Item key="autocomplete">
                <Link to={`${url}/autocomplete`}>Autocomplete</Link>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="grid_layout">
              <Link to={`${url}/gridLayout`}>
                <span className="isoMenuHolder">
                  <i className="ion-cube" />
                  <span className="nav-text">Box Options</span>
                </span>
              </Link>
            </Menu.Item>

            <SubMenu
              key="uielements"
              title={
                <span className="isoMenuHolder">
                  <i className="ion-leaf" />
                  <span className="nav-text">UI Elements</span>
                </span>
              }
            >
              <Menu.Item key="op_badge">
                <Link to={`${url}/op_badge`}>Badge</Link>
              </Menu.Item>
              <Menu.Item key="op_card">
                <Link to={`${url}/op_card`}>Card</Link>
              </Menu.Item>
              <Menu.Item key="op_carousel">
                <Link to={`${url}/op_carousel`}>Carousel</Link>
              </Menu.Item>
              <Menu.Item key="op_collapse">
                <Link to={`${url}/op_collapse`}>Collapse</Link>
              </Menu.Item>
              <Menu.Item key="op_popover">
                <Link to={`${url}/op_popover`}>Popover</Link>
              </Menu.Item>
              <Menu.Item key="op_tooltip">
                <Link to={`${url}/op_tooltip`}>Tooltip</Link>
              </Menu.Item>
              <Menu.Item key="op_tag">
                <Link to={`${url}/op_tag`}>Tag</Link>
              </Menu.Item>
              <Menu.Item key="op_timeline">
                <Link to={`${url}/op_timeline`}>Timeline</Link>
              </Menu.Item>
              <Menu.Item key="dropdown">
                <Link to={`${url}/dropdown`}>Drop Down</Link>
              </Menu.Item>
              <Menu.Item key="pagination">
                <Link to={`${url}/pagination`}>Pagination</Link>
              </Menu.Item>
              <Menu.Item key="rating">
                <Link to={`${url}/rating`}>Rating</Link>
              </Menu.Item>
              <Menu.Item key="tree">
                <Link to={`${url}/tree`}>Tree</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="advancedUielements"
              title={
                <span className="isoMenuHolder">
                  <i className="ion-flash" />
                  <span className="nav-text">Advanced Elements</span>
                </span>
              }
            >
              <Menu.Item key="reactDates">
                <Link to={`${url}/reactDates`}>React Dates</Link>
              </Menu.Item>
              <Menu.Item key="codeMirror">
                <Link to={`${url}/codeMirror`}>Code Mirror</Link>
              </Menu.Item>
              <Menu.Item key="uppy">
                <Link to={`${url}/uppy`}>Uppy Uploader</Link>
              </Menu.Item>
              <Menu.Item key="dropzone">
                <Link to={`${url}/dropzone`}>Dropzone</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="feedback"
              title={
                <span className="isoMenuHolder">
                  <i className="ion-thumbsup" />
                  <span className="nav-text">Feedback</span>
                </span>
              }
            >
              <Menu.Item key="alert">
                <Link to={`${url}/alert`}>Alert</Link>
              </Menu.Item>
              <Menu.Item key="modal">
                <Link to={`${url}/modal`}>Modal</Link>
              </Menu.Item>
              <Menu.Item key="message">
                <Link to={`${url}/message`}>Message</Link>
              </Menu.Item>
              <Menu.Item key="notification">
                <Link to={`${url}/notification`}>Notificaion</Link>
              </Menu.Item>
              <Menu.Item key="popconfirm">
                <Link to={`${url}/popconfirm`}>Popconfirm</Link>
              </Menu.Item>
              <Menu.Item key="spin">
                <Link to={`${url}/spin`}>Spin</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu
              key="table"
              title={
                <span className="isoMenuHolder">
                  <i className="ion-android-menu" />
                  <span className="nav-text">Tables</span>
                </span>
              }
            >
              <Menu.Item key="table_ant">
                <Link to={`${url}/table_ant`}>Ant Table</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu
              key="pages"
              title={
                <span className="isoMenuHolder">
                  <i className="ion-document" />
                  <span className="nav-text">Pages</span>
                </span>
              }
            >
              <Menu.Item key="404">
                <Link to={'/404'}>404</Link>
              </Menu.Item>
              <Menu.Item key="500">
                <Link to={'/500'}>500</Link>
              </Menu.Item>
              <Menu.Item key="signin">
                <Link to={'/signin'}>Sign In</Link>
              </Menu.Item>
              <Menu.Item key="signup">
                <Link to={'/signup'}>Sign Up</Link>
              </Menu.Item>
              <Menu.Item key="forgotpassword">
                <Link to={'/forgotpassword'}>Forgot Password</Link>
              </Menu.Item>
              <Menu.Item key="resetpassword">
                <Link to={'/resetpassword'}>Reset Password</Link>
              </Menu.Item>
              <Menu.Item key="invoice">
                <Link to={`${url}/invoice`}>Invoice</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub1"
              title={
                <span className="isoMenuHolder">
                  <i className="ion-android-options" />
                  <span className="nav-text">Menu Levels</span>
                </span>
              }
            >
              <MenuItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="blank_page">
              <Link to={`${url}/blank_page`}>
                <span className="isoMenuHolder">
                  <i className="ion-document" />
                  <span className="nav-text">Blank Page</span>
                </span>
              </Link>
            </Menu.Item>
          </Menu>
        </Scrollbars>
      </Sider>
    );
  }
}

export default connect(
  state => ({
    app: state.App.toJS()
  }),
  { toggleOpenDrawer, changeOpenKeys, changeCurrent, toggleCollapsed }
)(Sidebar);
