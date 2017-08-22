import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import Button, { ButtonGroup } from '../../../components/uielements/button';
import Radio from '../../../components/uielements/radio';
import Menu from '../../../components/uielements/menu';
import Dropdown from '../../../components/uielements/dropdown';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

export default class AntdButton extends Component {
  state = {
    size: 'default',
    loading: false,
    iconLoading: false,
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    const size = this.state.size;
    const margin = { margin: '0 8px 8px 0' };
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>Buttons</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Button Type">
              <ContentHolder>
                <Button type="primary" style={margin}>Primary</Button>
                <Button style={margin}>Default</Button>
                <Button type="dashed" style={margin}>Dashed</Button>
                <Button type="danger">Danger</Button>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Button Icon">
              <ContentHolder>
                <Button
                  type="primary"
                  shape="circle"
                  icon="search"
                  style={margin}
                />
                <Button type="primary" icon="search" style={margin}>
                  Search
                </Button>
                <Button shape="circle" icon="search" style={margin} />
                <Button icon="search">Search</Button>
              </ContentHolder>

              <ContentHolder>
                <Button shape="circle" icon="search" style={margin} />
                <Button icon="search" style={margin}>Search</Button>
                <Button
                  type="dashed"
                  shape="circle"
                  icon="search"
                  style={margin}
                />
                <Button type="dashed" icon="search">Search</Button>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Button Size">
              <ContentHolder>
                <Radio.Group value={size} onChange={this.handleSizeChange}>
                  <Radio.Button value="large">Large</Radio.Button>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
              </ContentHolder>

              <ContentHolder>
                <Button
                  type="primary"
                  shape="circle"
                  icon="download"
                  size={size}
                  style={margin}
                />
                <Button
                  type="primary"
                  icon="download"
                  size={size}
                  style={margin}
                >
                  Download
                </Button>
                <Button type="primary" size={size}>Normal</Button>
              </ContentHolder>

              <ContentHolder>
                <ButtonGroup size={size}>
                  <Button type="primary">
                    <Icon type="left" />Backward
                  </Button>
                  <Button type="primary">
                    Forward<Icon type="right" />
                  </Button>
                </ButtonGroup>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Button Disabled">
              <ContentHolder>
                <Button type="primary" style={margin}>Primary</Button>
                <Button type="primary" disabled>Primary(disabled)</Button>
              </ContentHolder>

              <ContentHolder>
                <Button style={margin}>Default</Button>
                <Button disabled>Default(disabled)</Button>
              </ContentHolder>

              <ContentHolder>
                <Button style={margin}>Ghost</Button>
                <Button disabled>Ghost(disabled)</Button>
              </ContentHolder>

              <ContentHolder>
                <Button type="dashed" style={margin}>Dashed</Button>
                <Button type="dashed" disabled>Dashed(disabled)</Button>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Button Loading">
              <ContentHolder>
                <Button type="primary" loading style={margin}>
                  Loading
                </Button>
                <Button type="primary" size="small" loading>
                  Loading
                </Button>
              </ContentHolder>

              <ContentHolder>
                <Button
                  type="primary"
                  loading={this.state.loading}
                  onClick={this.enterLoading}
                  style={margin}
                >
                  Click me!
                </Button>
                <Button
                  type="primary"
                  icon="poweroff"
                  loading={this.state.iconLoading}
                  onClick={this.enterIconLoading}
                >
                  Click me!
                </Button>
              </ContentHolder>

              <ContentHolder>
                <Button shape="circle" loading style={margin} />
                <Button type="primary" shape="circle" loading />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Multiple Button">
              <ContentHolder>
                <Button type="primary" style={margin}>primary</Button>
                <Button style={margin}>secondary</Button>
                <Dropdown overlay={menu}>
                  <Button>
                    more <Icon type="down" />
                  </Button>
                </Dropdown>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Button Group">
              <ContentHolder>
                <h4>Basic</h4>
                <ButtonGroup style={margin}>
                  <Button>Cancel</Button>
                  <Button type="primary">OK</Button>
                </ButtonGroup>
                <ButtonGroup style={margin}>
                  <Button disabled>L</Button>
                  <Button disabled>M</Button>
                  <Button disabled>R</Button>
                </ButtonGroup>
                <ButtonGroup style={margin}>
                  <Button type="primary">L</Button>
                  <Button>M</Button>
                  <Button>M</Button>
                  <Button type="dashed">R</Button>
                </ButtonGroup>
              </ContentHolder>

              <ContentHolder>
                <h4>With Icon</h4>
                <ButtonGroup style={margin}>
                  <Button type="primary">
                    <Icon type="left" />Go back
                  </Button>
                  <Button type="primary">
                    Go forward<Icon type="right" />
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button type="primary" icon="cloud" />
                  <Button type="primary" icon="cloud-download" />
                </ButtonGroup>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
