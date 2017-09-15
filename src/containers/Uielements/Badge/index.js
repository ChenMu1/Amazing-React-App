import React, { Component } from 'react';
import { Icon } from 'antd';
import { Row, Col } from 'antd';
import Badge from '../../../components/uielements/badge';
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
        <PageHeader>Badge</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Basic Example"
              subtitle="Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."
            >
              <ContentHolder>
                <Badge count={4}>
                  <a className="isoBadgeLink"> </a>
                </Badge>
                <Badge count={0} showZero>
                  <a className="isoBadgeLink"> </a>
                </Badge>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Overflow Count"
              subtitle="OverflowCount is displayed when count is larger than overflowCount. The default value of overflowCount is 99."
            >
              <ContentHolder>
                <Badge count={99}>
                  <a className="isoBadgeLink"> </a>
                </Badge>
                <Badge count={100}>
                  <a className="isoBadgeLink"> </a>
                </Badge>
                <Badge count={99} overflowCount={10}>
                  <a className="isoBadgeLink"> </a>
                </Badge>
                <Badge count={1000} overflowCount={999}>
                  <a className="isoBadgeLink"> </a>
                </Badge>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Status" subtitle="Standalone badge with status.">
              <ContentHolder>
                <Badge status="success" />
                <Badge status="error" />
                <Badge status="default" />
                <Badge status="processing" />
                <Badge status="warning" />
                <br />
                <br />
                <Badge status="success" text="Success" />
                <br />
                <Badge status="error" text="Error" />
                <br />
                <Badge status="default" text="Default" />
                <br />
                <Badge status="processing" text="Processing" />
                <br />
                <Badge status="warning" text="Warning" />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Red badge"
              subtitle="This will simply display a red badge, without a specific count."
            >
              <ContentHolder>
                <Badge dot>
                  <Icon type="notification" />
                </Badge>
                <Badge dot>
                  <a href=".">Link something</a>
                </Badge>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
