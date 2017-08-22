import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Checkbox, {
  CheckboxGroup
} from '../../../components/uielements/checkbox';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

const defaultCheckedList = ['Apple', 'Orange'];
const plainOptions = ['Apple', 'Pear', 'Orange'];
export default class IsomorphicCheckbox extends Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false
  };

  handleOnChange = checkedValues => {
    console.log('checked = ', checkedValues);
  };

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate:
        !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length
    });
  };
  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked
    });
  };

  render() {
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' }
    ];
    const optionsWithDisabled = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: false }
    ];
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>Checkbox</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="Basic Checkbox" subtitle="Basic usage of checkbox.">
              <ContentHolder>
                <Checkbox onChange={this.handleOnChange}>Checkbox</Checkbox>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Checkbox Group"
              subtitle="Generate a group of checkboxes from an array. Use disabled to disable a checkbox."
            >
              <ContentHolder>
                <CheckboxGroup
                  options={plainOptions}
                  defaultValue={['Apple']}
                  onChange={this.handleOnChange}
                />
                <br />
                <CheckboxGroup
                  options={options}
                  defaultValue={['Pear']}
                  onChange={this.handleOnChange}
                />
                <br />
                <CheckboxGroup
                  options={optionsWithDisabled}
                  disabled
                  defaultValue={['Apple']}
                  onChange={this.handleOnChange}
                />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Checkbox Group"
              subtitle="Generate a group of checkboxes from an array. Use disabled to disable a checkbox."
            >
              <ContentHolder>
                <div>
                  <div
                    style={{
                      borderBottom: '1px solid #E9E9E9',
                      paddingBottom: '15px'
                    }}
                  >
                    <Checkbox
                      indeterminate={this.state.indeterminate}
                      onChange={this.onCheckAllChange}
                      checked={this.state.checkAll}
                    >
                      Check all
                    </Checkbox>
                  </div>
                  <br />
                  <CheckboxGroup
                    options={plainOptions}
                    value={this.state.checkedList}
                    onChange={this.onChange}
                  />
                </div>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
