import React from 'react';
import {Radar} from 'react-chartjs-2';
import { data } from './radarConfig';

class RadarChart extends React.Component {
  render() {
    return (
        <Radar
          data={data}
          height={230}
         />
    );
  }
};

export default RadarChart;
