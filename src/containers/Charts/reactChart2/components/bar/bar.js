import React from 'react';
import {Bar} from 'react-chartjs-2';
import { data, barSettings } from './barConfig';


class BarChart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={data}
          width={barSettings.width}
          height={barSettings.height}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
};

export default BarChart;
