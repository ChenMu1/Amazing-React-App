import React from 'react';
import {Line} from 'react-chartjs-2';
import { data } from './lineConfig';

class LineChart extends React.Component {
  render() {
    return (
        <Line data={data} />
    );
  }
};

export default LineChart;
