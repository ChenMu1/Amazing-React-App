import React, { Component } from 'react';
import { Row, Col } from 'antd';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import PageHeader from '../../../components/utility/pageHeader';
import ContentHolder from '../../../components/utility/contentHolder';
import Box from '../../../components/utility/box';
import basicStyle from '../../../config/basicStyle';
import BasicMap from './maps/basic';
// import GeoLocationMap from './maps/geoLoacations';

export default class GoogleMap extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>Google Map New Zealand</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} sm={24} xs={24} style={colStyle}>
            <Box>
              <ContentHolder>
                <BasicMap />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
