import React, { Component } from 'react';
import { Tabs } from 'antd';
import fakeData from '../fakeData';
import { tableinfos } from './configs';
import * as TableViews from './tableViews/';
const TabPane = Tabs.TabPane;
const dataList = new fakeData(10);

export default class AntTable extends Component {
  renderTable(tableInfo) {
    let Component;
    switch (tableInfo.value) {
      case 'sortView':
        Component = TableViews.SortView;
        break;
      case 'filterView':
        Component = TableViews.FilterView;
        break;
      case 'editView':
        Component = TableViews.EditView;
        break;
      case 'groupView':
        Component = TableViews.GroupView;
        break;
      case 'customizedView':
        Component = TableViews.CustomizedView;
        break;
      default:
        Component = TableViews.SimpleView;
    }
    return <Component tableInfo={tableInfo} dataList={dataList} />;
  }
  render() {
    return (
      <div className="isoLayoutContentWrapper">
        <div className="isoLayoutContent">
          <Tabs>
            {tableinfos.map(tableInfo => (
              <TabPane tab={tableInfo.title} key={tableInfo.value}>
                {this.renderTable(tableInfo)}
              </TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    );
  }
}
export { TableViews, tableinfos, dataList };
