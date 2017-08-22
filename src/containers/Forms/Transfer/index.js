import React, { Component } from 'react';
import Transfer from '../../../components/uielements/transfer';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';

export default class IsomorphicTransfer extends Component {
  state = {
    mockData: [],
    targetKeys: [],
  };
  componentDidMount() {
    this.getMock();
  }
  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };
  filterOption = (inputValue, option) => {
    return option.description.indexOf(inputValue) > -1;
  };
  handleChange = targetKeys => {
    this.setState({ targetKeys });
  };
  render() {
    return (
      <LayoutWrapper>
        <PageHeader>Transfer</PageHeader>

        <Box title="Search" subtitle="Transfer with a search box.">
          <ContentHolder>
            <Transfer
              dataSource={this.state.mockData}
              showSearch
              filterOption={this.filterOption}
              targetKeys={this.state.targetKeys}
              onChange={this.handleChange}
              render={item => item.title}
              className="isomorphicTransfer"
            />
          </ContentHolder>
        </Box>
      </LayoutWrapper>
    );
  }
}
