import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Card from '../../../components/uielements/card';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

export default class extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>Cards</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Basic card"
              subtitle="A basic card containing a title, content and an extra corner content."
            >
              <ContentHolder>
                <Card
                  title="Card title"
                  extra={<a>More</a>}
                  style={{ width: '100%' }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>Card content</p>
                </Card>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="No Border"
              subtitle="A borderless card on a gray background."
            >
              <ContentHolder>
                <Card
                  title="Card title"
                  bordered={false}
                  style={{ width: '100%' }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>Card content</p>
                </Card>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col span={24} style={colStyle}>
            <Box
              title="Grid card"
              subtitle="Cards usually cooperate with grid layout in overview page."
            >
              <ContentHolder>
                <Row>
                  <Col span="8">
                    <Card title="Card title">Card content</Card>
                  </Col>
                  <Col span="8">
                    <Card title="Card title">Card content</Card>
                  </Col>
                  <Col span="8">
                    <Card title="Card title">Card content</Card>
                  </Col>
                </Row>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Loading card"
              subtitle="Shows a loading indicator while the contents of the card is being fetched."
            >
              <ContentHolder>
                <Card loading title="Card title" style={{ width: '100%' }}>
                  Whatever content
                </Card>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Customized Content"
              subtitle="Shows a loading indicator while the contents of the card is being fetched."
            >
              <ContentHolder>
                <Card bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img
                      alt="example"
                      width="100%"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  </div>
                  <div className="custom-card">
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                  </div>
                </Card>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
