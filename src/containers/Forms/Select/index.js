import React, { Component } from 'react';
import Select from '../../../components/uielements/select';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
export default class AntdSelectBox extends Component {
  handleChange = value => {
    console.log(value);
  };
  render() {
    return (
      <LayoutWrapper>
        <PageHeader>Select</PageHeader>

        <Box
          title="Multiple selection"
          subtitle="Multiple selection, selecting from existing items (scroll the menu)"
        >
          <ContentHolder>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
              onChange={this.handleChange}
            >
              {children}
            </Select>
          </ContentHolder>
        </Box>
      </LayoutWrapper>
    );
  }
}
