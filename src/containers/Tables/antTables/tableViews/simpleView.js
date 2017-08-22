import React, { Component } from 'react';
import Table from '../../../../components/uielements/table';

export default class SimpleView extends Component {
  render() {
    return (
      <div className="isoSimpleTable">
        <Table
          pagination={false}
          columns={this.props.tableInfo.columns}
          dataSource={this.props.dataList.getAll()}
        />
      </div>
    );
  }
}
