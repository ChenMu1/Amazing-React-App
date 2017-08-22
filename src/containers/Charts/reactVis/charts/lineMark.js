import React, { Component } from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries
} from 'react-vis';

export default class LineMark extends Component {
  render() {
    const { datas, width, height } = this.props;
    return (
      <div className="isoChartWrapper">
        <XYPlot
          width={width}
          height={height}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {datas.map((data, key) => {
            const config = {
              key,
              className: data.className,
              data: data.data,
              curve: data.curve,
            };
            return(<LineMarkSeries {...config} />);
          })}
        </XYPlot>
      </div>
    );
  }
}
