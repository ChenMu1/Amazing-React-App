import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Popover from '../../../components/uielements/popover';
import Button from '../../../components/uielements/button';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

const content = (
  <div>
    <p>
      The most basic example.{' '}
      <br />
      The size of the floating layer depends
      <br />
      {' '}on the contents region.
    </p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;
export default class extends Component {
  state = {
    visible: false,
  };
  hide = () => {
    this.setState({
      visible: false,
    });
  };
  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>Popover</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Basic Example"
              subtitle="The most basic example. The size of the floating layer depends on the contents region."
            >
              <ContentHolder>
                <Popover content={content} title="Title">
                  <Button type="primary">Hover me</Button>
                </Popover>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Three ways to trigger"
              subtitle="Mouse to click, focus and move in."
            >
              <ContentHolder>
                <Popover content={content} title="Title" trigger="hover">
                  <Button className="demoBtn">Hover me</Button>
                </Popover>
                <Popover content={content} title="Title" trigger="focus">
                  <Button className="demoBtn">Focus me</Button>
                </Popover>
                <Popover content={content} title="Title" trigger="click">
                  <Button className="demoBtn">Click me</Button>
                </Popover>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col span={24} style={colStyle}>
            <Box
              title="Placement"
              subtitle="There are 12 placement options available."
            >
              <ContentHolder>
                <div
                  className="demoBtnsWrapper"
                  style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}
                >
                  <Popover
                    placement="topLeft"
                    title="Top Left"
                    content={content}
                    trigger="click"
                  >
                    <Button className="demoPosBtn">TL</Button>
                  </Popover>
                  <Popover
                    placement="top"
                    title="Top"
                    content={content}
                    trigger="click"
                  >
                    <Button className="demoPosBtn">Top</Button>
                  </Popover>
                  <Popover
                    placement="topRight"
                    title="Top Right"
                    content={content}
                    trigger="click"
                  >
                    <Button className="demoPosBtn">TR</Button>
                  </Popover>
                </div>
                <div
                  className="demoBtnsWrapper"
                  style={{ width: buttonWidth, float: 'left' }}
                >
                  <Popover
                    placement="leftTop"
                    title="Left Top"
                    content={content}
                    trigger="click"
                  >
                    <Button className="demoPosBtn">LT</Button>
                  </Popover>
                  <Popover
                    placement="left"
                    title="Left"
                    content={content}
                    trigger="click"
                  >
                    <Button className="demoPosBtn">Left</Button>
                  </Popover>
                  <Popover
                    placement="leftBottom"
                    title="Left Bottom"
                    content={content}
                    trigger="click"
                  >
                    <Button className="demoPosBtn">LB</Button>
                  </Popover>
                </div>
                <div
                  className="demoBtnsWrapper"
                  style={{
                    width: buttonWidth,
                    marginLeft: buttonWidth * 4 + 24,
                  }}
                >
                  <Popover
                    placement="rightTop"
                    title="Right Top"
                    content={content}
                    trigger="click"
                  >
                    <Button className="demoPosBtn">RT</Button>
                  </Popover>
                  <Popover
                    placement="right"
                    title="Right"
                    content={content}
                    trigger="click"
                  >
                    <Button className="demoPosBtn">Right</Button>
                  </Popover>
                  <Popover
                    placement="rightBottom"
                    title="Right Bottom"
                    content={content}
                    trigger="click"
                  >
                    <Button className="demoPosBtn">RB</Button>
                  </Popover>
                </div>
                <div
                  className="demoBtnsWrapper"
                  style={{
                    marginLeft: buttonWidth,
                    clear: 'both',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Popover
                    placement="bottomLeft"
                    title="Bottom Left"
                    content={content}
                    trigger="click"
                  >
                    <Button className="demoPosBtn">BL</Button>
                  </Popover>
                  <Popover
                    placement="bottom"
                    title="Bottom"
                    content={content}
                    trigger="click"
                  >
                    <Button className="demoPosBtn">Bottom</Button>
                  </Popover>
                  <Popover
                    placement="bottomRight"
                    title="Bottom Right"
                    content={content}
                    trigger="click"
                  >
                    <Button className="demoPosBtn">BR</Button>
                  </Popover>
                </div>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Controlling the close of the dialog"
              subtitle="Use visible prop to control the display of the card."
            >
              <ContentHolder>
                <Popover
                  content={<a onClick={this.hide}>Close</a>}
                  title="Title"
                  trigger="click"
                  visible={this.state.visible}
                  onVisibleChange={this.handleVisibleChange}
                >
                  <Button type="primary">Click me</Button>
                </Popover>
              </ContentHolder>
            </Box>
          </Col>

        </Row>
      </LayoutWrapper>
    );
  }
}
