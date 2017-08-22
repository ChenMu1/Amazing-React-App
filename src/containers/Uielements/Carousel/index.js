import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Carousel from '../../../components/uielements/carousel';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

export default class extends Component {
  onChange = (a, b, c) => {
    console.log(a, b, c);
  };
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>Carousal</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Basic Carousel" subtitle="Basic usage">
              <ContentHolder>
                <Carousel afterChange={this.onChange}>
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>3</h3></div>
                  <div><h3>4</h3></div>
                </Carousel>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Vertical Carousel"
              subtitle="Vertical pagination. use {vertical='true'}"
            >
              <ContentHolder>
                <Carousel afterChange={this.onChange}>
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>3</h3></div>
                  <div><h3>4</h3></div>
                </Carousel>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Fade In Transition"
              subtitle="Slides use fade for transition. {effect='fade'}"
            >
              <ContentHolder>
                <Carousel vertical="true">
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>3</h3></div>
                  <div><h3>4</h3></div>
                </Carousel>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Scroll Automatically"
              subtitle="Timing of scrolling to the next card/picture. autoplay"
            >
              <ContentHolder>
                <Carousel autoplay>
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>3</h3></div>
                  <div><h3>4</h3></div>
                </Carousel>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
