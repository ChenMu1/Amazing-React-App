import React, { Component } from 'react';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import Uppy from '../../../components/uielements/uppy';
import config from './config';
export default class extends Component {
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
  }
  componentDidMount() {
    Uppy(config);
  }
  onSuccess(fileList) {
    console.log(fileList);
  }
  render() {
    return (
      <LayoutWrapper>
        <PageHeader>Uppy</PageHeader>
        <Box>
          <ContentHolder>
            <div id="uppyHolder" />
          </ContentHolder>
        </Box>
      </LayoutWrapper>
    );
  }
}
