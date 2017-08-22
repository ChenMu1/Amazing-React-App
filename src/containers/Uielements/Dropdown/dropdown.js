import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Button, message, Row, Col } from 'antd';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

const SubMenu = Menu.SubMenu;

export default class IsoDropDown extends Component {
  state = {
    visible: false,
  };

  handleButtonClick = e => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };

  handleMenuClickToLink = e => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  handleMenuClick = e => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  };
  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    const demoStyle = {
      marginBottom: '8px',
      marginRight: '8px',
    };

    const menuHover = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://redq.io/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://redq.io/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://redq.io/">
            3d menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    const menuHoverDisable = (
      <Menu>
        <Menu.Item key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://redq.io/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://redq.io/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" disabled>3d menu item（disabled）</Menu.Item>
      </Menu>
    );
    const menuClicked = (
      <Menu onClick={this.handleMenuClickToLink}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3d menu item</Menu.Item>
      </Menu>
    );

    const menuSubmenu = (
      <Menu>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
        <SubMenu title="sub menu">
          <Menu.Item>3d menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
        </SubMenu>
      </Menu>
    );

    return (
      <LayoutWrapper>
        <PageHeader>Dropdown</PageHeader>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Hover Drop Down">
              <ContentHolder>
                <Dropdown overlay={menuHover}>
                  <a className="ant-dropdown-link">
                    Hover me <Icon type="down" />
                  </a>
                </Dropdown>
              </ContentHolder>
            </Box>
          </Col>

          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Hover Placement Drop Down">
              <ContentHolder>
                <Dropdown overlay={menuHover} placement="bottomLeft">
                  <Button style={demoStyle}>bottomLeft</Button>
                </Dropdown>
                <Dropdown overlay={menuHover} placement="bottomCenter">
                  <Button style={demoStyle}>bottomCenter</Button>
                </Dropdown>
                <Dropdown overlay={menuHover} placement="bottomRight">
                  <Button style={demoStyle}>bottomRight</Button>
                </Dropdown>
                <br />
                <Dropdown overlay={menuHover} placement="topLeft">
                  <Button style={demoStyle}>topLeft</Button>
                </Dropdown>
                <Dropdown overlay={menuHover} placement="topCenter">
                  <Button style={demoStyle}>topCenter</Button>
                </Dropdown>
                <Dropdown overlay={menuHover} placement="topRight">
                  <Button style={demoStyle}>topRight</Button>
                </Dropdown>
              </ContentHolder>
            </Box>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Hover Drop Down with Disable link">
              <ContentHolder>
                <Dropdown overlay={menuHoverDisable}>
                  <a className="ant-dropdown-link">
                    Hover me <Icon type="down" />
                  </a>
                </Dropdown>
              </ContentHolder>
            </Box>
          </Col>

          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Clicked Drop Down">
              <ContentHolder>
                <Dropdown overlay={menuHover} trigger={['click']}>
                  <a className="ant-dropdown-link">
                    Click me <Icon type="down" />
                  </a>
                </Dropdown>
              </ContentHolder>
            </Box>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Button with dropdown menu">
              <ContentHolder>
                <Dropdown.Button
                  onClick={this.handleButtonClick}
                  overlay={menuClicked}
                >
                  Dropdown
                </Dropdown.Button>
                <Dropdown.Button
                  onClick={this.handleButtonClick}
                  overlay={menuClicked}
                  disabled
                  style={{ marginLeft: 8 }}
                >
                  Dropdown
                </Dropdown.Button>
                <Dropdown overlay={menuClicked}>
                  <Button style={{ marginLeft: 8 }}>
                    Button <Icon type="down" />
                  </Button>
                </Dropdown>
              </ContentHolder>
            </Box>
          </Col>

          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Clicked Drop Down">
              <ContentHolder>
                <Dropdown overlay={menuSubmenu}>
                  <a className="ant-dropdown-link">
                    Cascading menu <Icon type="down" />
                  </a>
                </Dropdown>
              </ContentHolder>
            </Box>
          </Col>
        </Row>

      </LayoutWrapper>
    );
  }
}
