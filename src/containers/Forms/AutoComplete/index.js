import React, { Component } from 'react';
import { Row, Col } from 'antd';
import AutoComplete from '../../../components/uielements/autocomplete';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';

const Option = AutoComplete.Option;

export default class IsomorphicAutocomplete extends Component {
  state = {
    result: [],
    dataSource: [],
  };

  handleCustomizedChange = value => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(
        domain => `${value}@${domain}`,
      );
    }
    this.setState({ result });
  };

  handleChange = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
    });
  };

  render() {
    const { dataSource, result } = this.state;
    const children = result.map(email => {
      return <Option key={email}>{email}</Option>;
    });
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper>
        <PageHeader>Autocomplete</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box
              title="Customized"
              subtitle="You could pass AutoComplete.Option as children of AutoComplete, instead of using dataSource"
            >
              <ContentHolder>
                <AutoComplete
                  onChange={this.handleCustomizedChange}
                  placeholder="input here"
                >
                  {children}
                </AutoComplete>
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box
              title="Customize Input Component"
              subtitle="Customize Input Component"
            >
              <ContentHolder>
                <AutoComplete
                  dataSource={dataSource}
                  style={{ height: 200 }}
                  onChange={this.handleChange}
                  placeholder="input here"
                >
                  <textarea style={{ height: 200 }} />
                </AutoComplete>
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
