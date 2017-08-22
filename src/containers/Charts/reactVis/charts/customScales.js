import React, { Component } from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';

export default class CustomScales extends Component {
  render() {
    const { datas, width, height } = this.props;
    return (
      <div className="isoChartWrapper">
        <XYPlot
          xType="linear"
          width={width}
          height={height}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="X Axis" />
          <YAxis title="Y Axis" />
          {datas.map((data, key) => {
            const config = {
              key,
              data: data.data,
            };
            return(<LineSeries {...config} />);
          })}
        </XYPlot>
      </div>
    );
  }
}
