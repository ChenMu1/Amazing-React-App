import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import Timeline from '../../../components/uielements/timeline';
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
        <PageHeader>Timeline</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Basic Example" subtitle="Basic timeline">
              <ContentHolder>
                <Timeline>
                  <Timeline.Item>
                    Create a services site 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>
                    Solve initial network problems 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                  <Timeline.Item>
                    Network problems being solved 2015-09-01
                  </Timeline.Item>
                </Timeline>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Color Example"
              subtitle="Set the color of circles. green means completed or success status, red means warning or error, and blue means ongoing or other default status."
            >
              <ContentHolder>
                <Timeline>
                  <Timeline.Item color="green">
                    Create a services site 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item color="green">
                    Create a services site 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item color="red">
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                  </Timeline.Item>
                  <Timeline.Item>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                  </Timeline.Item>
                </Timeline>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Custom"
              subtitle="Set a node as an icon or other custom element."
            >
              <ContentHolder>
                <Timeline>
                  <Timeline.Item>
                    Create a services site 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>
                    Solve initial network problems 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item
                    dot={
                      (
                        <Icon
                          type="clock-circle-o"
                          style={{ fontSize: '16px' }}
                        />
                      )
                    }
                    color="red"
                  >
                    Technical testing 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>
                    Network problems being solved 2015-09-01
                  </Timeline.Item>
                </Timeline>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Last Node"
              subtitle="When the timeline is incomplete and ongoing, put a ghost node at last. set {pending={true}} or {pending={a React Element}}"
            >
              <ContentHolder>
                <Timeline pending={<a>See more</a>}>
                  <Timeline.Item>
                    Create a services site 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>
                    Solve initial network problems 2015-09-01
                  </Timeline.Item>
                  <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                </Timeline>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
