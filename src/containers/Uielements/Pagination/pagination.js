import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Pagination from '../../../components/uielements/pagination';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

export default class extends Component {
  state = {
    current: 3,
  };
  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  onChange = pageNumber => {
    console.log('Page: ', pageNumber);
  };
  showTotal = total => {
    return `Total ${total} items`;
  };
  onChangeControlled = page => {
    console.log(page);
    this.setState({
      current: page,
    });
  };
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>Pagination</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Basic">
              <ContentHolder>
                <Pagination defaultCurrent={1} total={50} />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="More">
              <ContentHolder>
                <Pagination defaultCurrent={6} total={500} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Changer">
              <ContentHolder>
                <Pagination
                  showSizeChanger
                  onShowSizeChange={this.onShowSizeChange}
                  defaultCurrent={3}
                  total={500}
                />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Jumper">
              <ContentHolder>
                <Pagination
                  showQuickJumper
                  defaultCurrent={2}
                  total={500}
                  onChange={this.onChange}
                />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Mini Size">
              <ContentHolder>
                <Pagination size="small" total={50} />
                <br />
                <Pagination
                  size="small"
                  total={50}
                  showSizeChanger
                  showQuickJumper
                />
                <br />
                <Pagination
                  size="small"
                  total={50}
                  showTotal={this.showTotal}
                />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Simple Mode">
              <ContentHolder>
                <Pagination simple defaultCurrent={2} total={50} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Controlled">
              <ContentHolder>
                <Pagination
                  current={this.state.current}
                  onChange={this.onChangeControlled}
                  total={50}
                />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Total Number">
              <ContentHolder>
                <Pagination
                  total={85}
                  showTotal={total => `Total ${total} items`}
                  pageSize={20}
                  defaultCurrent={1}
                />
                <br />
                <Pagination
                  total={85}
                  showTotal={(total, range) =>
                    `${range[0]}-${range[1]} of ${total} items`}
                  pageSize={20}
                  defaultCurrent={1}
                />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
