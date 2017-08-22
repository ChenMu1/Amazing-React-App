import React, { Component } from 'react';
import Table from '../../../../components/uielements/table';

export default class SortView extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      dataList: this.props.dataList.getAll()
    };
  }
  onChange(pagination, filters, sorter) {
    const { dataList } = this.props;
    if (sorter && sorter.columnKey && sorter.order) {
      if (sorter.order === 'ascend') {
        dataList.getSortAsc(sorter.columnKey);
      } else {
        dataList.getSortDesc(sorter.columnKey);
      }
      this.setState({ dataList: dataList.getAll() });
    }
  }
  render() {
    return (
      <div className="isoSortingTable">
        <Table
          columns={this.props.tableInfo.columns}
          onChange={this.onChange}
          dataSource={this.state.dataList}
        />
      </div>
    );
  }
}
