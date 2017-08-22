import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Button, { ButtonGroup } from '../../../components/uielements/button';
import Progress from '../../../components/uielements/progress';
import PageHeader from '../../../components/utility/pageHeader';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import Box from '../../../components/utility/box';
import basicStyle from '../../../config/basicStyle';

export default class AntdProgress extends Component {
  state = {
    percent: 0,
  };
  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };
  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    const marginStyle = {
      marginRight: '10px',
      marginBottom: '10px',
    };
    return (
      <LayoutWrapper>
        <PageHeader>Progress Bar</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Progress bar" subtitle="A standard progress bar.">
              <Progress percent={30} style={marginStyle} />
              <Progress percent={50} status="active" style={marginStyle} />
              <Progress percent={70} status="exception" style={marginStyle} />
              <Progress percent={100} style={marginStyle} />
              <Progress percent={50} showInfo={false} style={marginStyle} />
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box
              title="Circular Progress bar"
              subtitle="A circular progress bar."
            >
              <Progress type="circle" percent={75} style={marginStyle} />
              <Progress
                type="circle"
                percent={70}
                status="exception"
                style={marginStyle}
              />
              <Progress type="circle" percent={100} style={marginStyle} />
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={8} xs={24} style={colStyle}>
            <Box
              title="Mini size progress bar"
              subtitle="Appropriate for a narrow area."
            >
              <Progress percent={30} strokeWidth={5} style={marginStyle} />
              <Progress
                percent={50}
                strokeWidth={5}
                status="active"
                style={marginStyle}
              />
              <Progress
                percent={70}
                strokeWidth={5}
                status="exception"
                style={marginStyle}
              />
              <Progress percent={100} strokeWidth={5} style={marginStyle} />
            </Box>
          </Col>
          <Col md={8} xs={24} style={colStyle}>
            <Box
              title="Mini size circular progress bar"
              subtitle="A smaller circular progress bar."
            >
              <Progress
                type="circle"
                percent={30}
                width={80}
                style={marginStyle}
              />
              <Progress
                type="circle"
                percent={70}
                width={80}
                status="exception"
                style={marginStyle}
              />
              <Progress
                type="circle"
                percent={100}
                width={80}
                style={marginStyle}
              />
            </Box>
          </Col>
          <Col md={8} xs={24} style={colStyle}>
            <Box
              title="Dynamic circular progress bar"
              subtitle="A dynamic progress bar is better."
            >
              <Progress
                type="circle"
                percent={this.state.percent}
                style={marginStyle}
              />
              <ButtonGroup>
                <Button onClick={this.decline} icon="minus" />
                <Button onClick={this.increase} icon="plus" />
              </ButtonGroup>
            </Box>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Custom text format"
              subtitle="You can custom text format by setting format."
            >
              <Progress
                type="circle"
                percent={75}
                format={percent => `${percent} Days`}
                style={marginStyle}
              />
              <Progress
                type="circle"
                percent={100}
                format={() => 'Done'}
                style={marginStyle}
              />
            </Box>
          </Col>

          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Dashboard" subtitle="A dashboard style of progress.">
              <Progress type="dashboard" percent={75} />
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
