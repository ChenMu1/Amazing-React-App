import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Collapse from '../../../components/uielements/collapse';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

const Panel = Collapse.Panel;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default class extends Component {
  callback = key => {
    console.log(key);
  };
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>Collapse</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Collapse"
              subtitle="More than one panel can be expanded at a time, the first panel is initialized to be active in this case. use {defaultActiveKey={['keyNum']}}"
            >
              <ContentHolder>
                <Collapse accordion>
                  <Panel header={'This is panel header 1'} key="1">
                    <p>{text}</p>
                  </Panel>
                  <Panel header={'This is panel header 2'} key="2">
                    <p>{text}</p>
                  </Panel>
                  <Panel header={'This is panel header 3'} key="3">
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Nested Example"
              subtitle="Collapse is nested inside the Collapse."
            >
              <ContentHolder>
                <Collapse onChange={this.callback}>
                  <Panel header={'This is panel header 1'} key="1">
                    <Collapse defaultActiveKey="1">
                      <Panel header={'This is panel nest panel'} key="1">
                        <p>{text}</p>
                      </Panel>
                    </Collapse>
                  </Panel>
                  <Panel header={'This is panel header 2'} key="2">
                    <p>{text}</p>
                  </Panel>
                  <Panel header={'This is panel header 3'} key="3">
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Borderless Example"
              subtitle="A borderless style of Collapse. use {bordered={false}}"
            >
              <ContentHolder>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                  <Panel header="This is panel header 1" key="1">
                    <p>{text}</p>
                  </Panel>
                  <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                  </Panel>
                  <Panel header="This is panel header 3" key="3">
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Accordion"
              subtitle="Accordion mode, only one panel can be expanded at a time. The first panel will be expanded by default. use accordion"
            >
              <ContentHolder>
                <Collapse accordion>
                  <Panel header={'This is panel header 1'} key="1">
                    <p>{text}</p>
                  </Panel>
                  <Panel header={'This is panel header 2'} key="2">
                    <p>{text}</p>
                  </Panel>
                  <Panel header={'This is panel header 3'} key="3">
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
