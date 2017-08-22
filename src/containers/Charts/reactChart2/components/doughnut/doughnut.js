import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import { data } from './doughnutConfig';

class DoughnutChart extends React.Component {
  render() {
    return (
        <Doughnut data={data} />
    );
  }
};

export default DoughnutChart;
