import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Tooltip from '../../../components/uielements/tooltip';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

const text = <span>Tooltip Content</span>;

export default class extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    const buttonWidth = 70;

    return (
      <LayoutWrapper>
        <PageHeader>Tooltip</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Basic Example" subtitle="The simplest usage.">
              <ContentHolder>
                <Tooltip title="Tooltip Content">
                  <span>Tooltip will show when mouse enter.</span>
                </Tooltip>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Placement"
              subtitle="The ToolTip has 12 placements choice."
            >
              <ContentHolder>
                <div
                  className="demoBtnsWrapper"
                  style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}
                >
                  <Tooltip placement="topLeft" title={text}>
                    <a className="tooltipBtn">TL</a>
                  </Tooltip>
                  <Tooltip placement="top" title={text}>
                    <a className="tooltipBtn">Top</a>
                  </Tooltip>
                  <Tooltip placement="topRight" title={text}>
                    <a className="tooltipBtn">TR</a>
                  </Tooltip>
                </div>
                <div
                  className="demoBtnsWrapper"
                  style={{ width: buttonWidth, float: 'left' }}
                >
                  <Tooltip placement="leftTop" title={text}>
                    <a className="tooltipBtn">LT</a>
                  </Tooltip>
                  <Tooltip placement="left" title={text}>
                    <a className="tooltipBtn">Left</a>
                  </Tooltip>
                  <Tooltip placement="leftBottom" title={text}>
                    <a className="tooltipBtn">LB</a>
                  </Tooltip>
                </div>
                <div
                  className="demoBtnsWrapper"
                  style={{
                    width: buttonWidth,
                    marginLeft: buttonWidth * 4 + 24,
                  }}
                >
                  <Tooltip placement="rightTop" title={text}>
                    <a className="tooltipBtn">RT</a>
                  </Tooltip>
                  <Tooltip placement="right" title={text}>
                    <a className="tooltipBtn">Right</a>
                  </Tooltip>
                  <Tooltip placement="rightBottom" title={text}>
                    <a className="tooltipBtn">RB</a>
                  </Tooltip>
                </div>
                <div
                  className="demoBtnsWrapper"
                  style={{
                    marginLeft: buttonWidth,
                    clear: 'both',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Tooltip placement="bottomLeft" title={text}>
                    <a className="tooltipBtn">BL</a>
                  </Tooltip>
                  <Tooltip placement="bottom" title={text}>
                    <a className="tooltipBtn">Bottom</a>
                  </Tooltip>
                  <Tooltip placement="bottomRight" title={text}>
                    <a className="tooltipBtn">BR</a>
                  </Tooltip>
                </div>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
