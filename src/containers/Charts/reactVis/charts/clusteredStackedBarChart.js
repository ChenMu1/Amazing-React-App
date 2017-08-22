import React, { Component } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  DiscreteColorLegend
} from 'react-vis';

export default class ClusteredStackedBarChart extends Component {
  render() {
    const { datas, width, height, orientationItems } = this.props;
    return (
      <div className="isoChartWrapper">
        <XYPlot
          className="clustered-stacked-bar-chart-example"
          xType="ordinal"
          stackBy="y"
          width={width}
          height={height}>
          <DiscreteColorLegend
            style={{position: 'absolute', left: '40px', top: '0px'}}
            orientation="horizontal" items={orientationItems}
          />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {datas.map((data, key) => {
            const config = {
              key,
              data: data.data,
              cluster: data.cluster,
              color: data.color,
            };
            return(<VerticalBarSeries {...config} />);
          })}

        </XYPlot>
      </div>
    );
  }
}
