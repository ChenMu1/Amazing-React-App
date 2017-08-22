import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import Rate from '../../../components/uielements/rate';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

export default class extends Component {
  state = {
    value: 3,
    count: null,
  };
  handleChange = value => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>Rating</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Basic Example" subtitle="The simplest usage.">
              <ContentHolder>
                <Rate />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Half star" subtitle="Support select half star.">
              <ContentHolder>
                <Rate allowHalf defaultValue={2.5} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Show copywriting"
              subtitle="Add copywriting in rate components."
            >
              <ContentHolder>
                <span>
                  <Rate onChange={this.handleChange} value={value} />
                  {value &&
                    <span className="ant-rate-text">{value} stars</span>}
                </span>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Read only"
              subtitle="Read only, can't use mouse to interact."
            >
              <ContentHolder>
                <Rate disabled defaultValue={2} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Other Character"
              subtitle="Replace the default star to other character like alphabet, digit, iconfont or even Chinese word."
            >
              <ContentHolder>
                <Rate character={<Icon type="heart" />} allowHalf />
                <br />
                <Rate character="A" allowHalf style={{ fontSize: 36 }} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
