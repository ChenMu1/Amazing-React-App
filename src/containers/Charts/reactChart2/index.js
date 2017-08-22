import React from "react";
import { Row, Col } from "antd";
import Async from "../../../helpers/asyncComponent";
import basicStyle from "../../../config/basicStyle";

const Doughnut = props =>
  <Async
    load={import(/* webpackChunkName: "ReactChart2-Doughnut" */ "./components/doughnut/doughnut")}
    componentProps={props}
  />;
const DynamicDoughnut = props =>
  <Async
    load={import(/* webpackChunkName: "ReactChart2-dynamic-doughnut" */ "./components/dynamic-doughnut/dynamic-doughnut")}
    componentProps={props}
  />;
const Pie = props =>
  <Async
    load={import(/* webpackChunkName: "ReactChart2-pie" */ "./components/pie/pie")}
    componentProps={props}
  />;
const Line = props =>
  <Async
    load={import(/* webpackChunkName: "ReactChart2-line" */ "./components/line/line")}
    componentProps={props}
  />;
const Bar = props =>
  <Async
    load={import(/* webpackChunkName: "ReactChart2-bar" */ "./components/bar/bar")}
    componentProps={props}
  />;
const HorizontalBar = props =>
  <Async
    load={import(/* webpackChunkName: "ReactChart2-horizontalBar" */ "./components/horizontalBar/horizontalBar")}
    componentProps={props}
  />;
const Radar = props =>
  <Async
    load={import(/* webpackChunkName: "ReactChart2-radar" */ "./components/radar/radar")}
    componentProps={props}
  />;
const Polar = props =>
  <Async
    load={import(/* webpackChunkName: "ReactChart2-polar" */ "./components/polar/polar")}
    componentProps={props}
  />;
const Bubble = props =>
  <Async
    load={import(/* webpackChunkName: "ReactChart2-bubble" */ "./components/bubble/bubble")}
    componentProps={props}
  />;
const MixedData = props =>
  <Async
    load={import(/* webpackChunkName: "ReactChart2-mix" */ "./components/mix/mix")}
    componentProps={props}
  />;
const RandomizedDataLine = props =>
  <Async
    load={import(/* webpackChunkName: "ReactChart2-randomizedLine" */ "./components/randomizedLine/randomizedLine")}
    componentProps={props}
  />;
const PageHeader = props =>
  <Async
    load={import(/* webpackChunkName: "ReactChart2-pageHeader" */ "../../../components/utility/pageHeader")}
    componentProps={props}
  />;
const Box = props =>
  <Async
    load={import(/* webpackChunkName: "ReactChart2-box" */ "../../../components/utility/box")}
    componentProps={props}
  />;
const LayoutWrapper = props =>
  <Async
    load={import(/* webpackChunkName: "ReactChart2-layoutWrapper" */ "../../../components/utility/layoutWrapper")}
    componentProps={props}
  />;
const ContentHolder = props =>
  <Async
    load={import(/* webpackChunkName: "ReactChart2-contentHolder" */ "../../../components/utility/contentHolder")}
    componentProps={props}
  />;
// const basicStyle = props =>
//   <Async
//     load={import(/* webpackChunkName: "ReactChart2-basicStyle" */ "../../../config/basicStyle")}
//     componentProps={props}
//   />;

class ReactChart2 extends React.Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper className="isoMapPage">
        <PageHeader>React Charts 2</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Doughnut">
              <ContentHolder>
                <Doughnut />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Dynamicly refreshed Doughnut">
              <ContentHolder>
                <DynamicDoughnut />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Pie">
              <ContentHolder>
                <Pie />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Line">
              <ContentHolder>
                <Line />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Bar (custom size)">
              <ContentHolder>
                <Bar />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Horizontal Bar Example">
              <ContentHolder>
                <HorizontalBar />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Radar">
              <ContentHolder>
                <Radar />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Polar">
              <ContentHolder>
                <Polar />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Bubble">
              <ContentHolder>
                <Bubble />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Mixed Data">
              <ContentHolder>
                <MixedData />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Random Animated">
              <ContentHolder>
                <RandomizedDataLine />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}

export default ReactChart2;
