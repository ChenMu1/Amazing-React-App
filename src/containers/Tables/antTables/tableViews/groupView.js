import React, { Component } from 'react';
import Table from '../../../../components/uielements/table';

export default class GroupView extends Component {
  render() {
    return (
      <div className="isoGroupTable">
        <Table
          columns={this.props.tableInfo.columns}
          dataSource={this.props.dataList.getAll()}
        />
      </div>
    );
  }
}
