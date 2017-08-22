import React from 'react';
import {Bar} from 'react-chartjs-2';
import { data, options } from './mixConfig';

class MixChart extends React.Component {
  render() {
    return (
        <Bar
          data={data}
          options={options}
        />
    );
  }
};

export default MixChart;
