import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';

export default class Example extends React.Component {
  render() {
    const { datas, width, height } = this.props;
    return (
      <div className="isoChartWrapper">
        <XYPlot
          width={width}
          height={height}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="X Axis" />
          <YAxis title="Y Axis" />
          {datas.map((data, key) => {
            const config = {
              key,
              className: data.className,
              data: data.data,
              curve: data.curve,
              strokeDasharray: data.strokeDasharray,
            };
            return(<LineSeries {...config} />);
          })}
        </XYPlot>
      </div>
    );
  }
}
