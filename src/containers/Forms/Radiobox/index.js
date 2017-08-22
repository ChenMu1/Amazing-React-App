import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Radio from '../../../components/uielements/radio';
import Input from '../../../components/uielements/input';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

const RadioGroup = Radio.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

export default class IsomorphicRadiobox extends Component {
  state = {
    value: 1,
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
  };
  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  onChange1 = e => {
    console.log('radio1 checked', e.target.value);
    this.setState({
      value1: e.target.value,
    });
  };
  onChange2 = e => {
    console.log('radio2 checked', e.target.value);
    this.setState({
      value2: e.target.value,
    });
  };
  onChange3 = e => {
    console.log('radio3 checked', e.target.value);
    this.setState({
      value3: e.target.value,
    });
  };
  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>Radio</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Basic Radio"
              subtitle="The simplest use. Use disabled to disable a radio."
            >
              <ContentHolder>
                <Radio>Radio</Radio>
                <br />
                <Radio defaultChecked={false} disabled>Disabled</Radio>
                <br />
                <Radio defaultChecked disabled>Disabled</Radio>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title="Vertical RadioGroup"
              subtitle="Vertical RadioGroup, with more radios."
            >
              <ContentHolder>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio style={radioStyle} value={1}>Option A</Radio>
                  <Radio style={radioStyle} value={2}>Option B</Radio>
                  <Radio style={radioStyle} value={3}>Option C</Radio>
                  <Radio style={radioStyle} value={4}>
                    More...
                    {this.state.value === 4
                      ? <Input style={{ width: 100, marginLeft: 10 }} />
                      : null}
                  </Radio>
                </RadioGroup>
              </ContentHolder>
            </Box>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="RadioGroup" subtitle="A group of radio components.">
              <ContentHolder>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>A</Radio>
                  <Radio value={2}>B</Radio>
                  <Radio value={3}>C</Radio>
                  <Radio value={4}>D</Radio>
                </RadioGroup>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box title="RadioGroup" subtitle="A group of radio components.">
              <ContentHolder>
                <RadioGroup
                  options={plainOptions}
                  onChange={this.onChange1}
                  value={this.state.value1}
                  style={{ marginBottom: '10px' }}
                />
                <RadioGroup
                  options={options}
                  onChange={this.onChange2}
                  value={this.state.value2}
                  style={{ marginBottom: '10px' }}
                />
                <RadioGroup
                  options={optionsWithDisabled}
                  onChange={this.onChange3}
                  value={this.state.value3}
                />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
