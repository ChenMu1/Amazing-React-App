import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Popconfirm from '../../../components/feedback/popconfirm';
import message from '../../../components/feedback/message';
import Button from '../../../components/uielements/button';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

const text = 'Are you sure delete this task?';
const buttonWidth = 70;

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

export default class IsomorphicPopconfirm extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return(<LayoutWrapper>
      <PageHeader>Pop Confirm</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Basic Confirm"
            subtitle="The basic example."
          >
            <ContentHolder>
              <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={confirm} onCancel={cancel}>
                <a>Delete</a>
              </Popconfirm>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title="Notification with custom icon"
            subtitle="Normal messages as feedbacks."
          >
            <ContentHolder>
              <div className="demoBtnsWrapper" style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                  <Button className="demoPosBtn">TL</Button>
                </Popconfirm>
                <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                  <Button className="demoPosBtn">Top</Button>
                </Popconfirm>
                <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                  <Button className="demoPosBtn">TR</Button>
                </Popconfirm>
              </div>
              <div className="demoBtnsWrapper" style={{ width: buttonWidth, float: 'left' }}>
                <Popconfirm placement="leftTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                  <Button className="demoPosBtn">LT</Button>
                </Popconfirm>
                <Popconfirm placement="left" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                  <Button className="demoPosBtn">Left</Button>
                </Popconfirm>
                <Popconfirm placement="leftBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                  <Button className="demoPosBtn">LB</Button>
                </Popconfirm>
              </div>
              <div className="demoBtnsWrapper" style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
                <Popconfirm placement="rightTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                  <Button className="demoPosBtn">RT</Button>
                </Popconfirm>
                <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                  <Button className="demoPosBtn">Right</Button>
                </Popconfirm>
                <Popconfirm placement="rightBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                  <Button className="demoPosBtn">RB</Button>
                </Popconfirm>
              </div>
              <div className="demoBtnsWrapper" style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                <Popconfirm placement="bottomLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                  <Button className="demoPosBtn">BL</Button>
                </Popconfirm>
                <Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                  <Button className="demoPosBtn">Bottom</Button>
                </Popconfirm>
                <Popconfirm placement="bottomRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                  <Button className="demoPosBtn">BR</Button>
                </Popconfirm>
              </div>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>);
  }
}
