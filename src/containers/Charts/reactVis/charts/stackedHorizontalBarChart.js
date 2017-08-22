import React, { Component } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
} from 'react-vis';

export default class StackedHorizontalBarChart extends Component {
  render() {
    const { datas, width, height } = this.props;
    return (
      <div className="isoChartWrapper">
        <XYPlot
          width={width}
          height={height}
          stackBy="x">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {datas.map((data, key) => {
          const config = {
            key,
            data: data.data,
          };
          return(<HorizontalBarSeries {...config} />);
        })}
        </XYPlot>
      </div>
    );
  }
}
