import React from 'react';
import {Pie} from 'react-chartjs-2';
import {data} from './pieConfig';

class PieChart extends React.Component {

  render() {
    return (
        <Pie data={data} />
    );
  }
};

export default PieChart;
