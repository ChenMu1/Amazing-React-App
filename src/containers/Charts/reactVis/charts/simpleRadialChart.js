import React, { Component } from 'react';

import {RadialChart} from 'react-vis';

export default class SimpleRadialChart extends Component {
  render() {
    const { datas, width, height, colorRange, colorDomain } = this.props;
    return (
      <div className="isoChartWrapper">
        <RadialChart
          colorType={'literal'}
          colorDomain={colorDomain}
          colorRange={colorRange}
          margin={{top: 100}}
          data={datas}
          showLabels
          width={width}
          height={height} />
      </div>
    );
  }
}
