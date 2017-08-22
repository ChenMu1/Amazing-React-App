import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';
import BasicTree from './basicTree';
import BasicControlledTree from './basicControlledTree';
import DraggableTree from './draggableTree';
import AsyncTree from './asyncTree';
import SearchableTree from './searchableTree';
import LineTree from './lineTree';

export default class extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>Tree</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Basic example"
              subtitle="The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc."
            >
              <ContentHolder>
                <BasicTree />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Basic controlled example"
              subtitle="basic controlled example"
            >
              <ContentHolder>
                <BasicControlledTree />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Draggable example"
              subtitle="Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode."
            >
              <ContentHolder>
                <DraggableTree />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Load data asynchronously"
              subtitle="To load data asynchronously when click to expand a treeNode."
            >
              <ContentHolder>
                <AsyncTree />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Searchable example" subtitle="Searchable Tree">
              <ContentHolder>
                <SearchableTree />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Tree With Line" subtitle="Tree With Line">
              <ContentHolder>
                <LineTree />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
