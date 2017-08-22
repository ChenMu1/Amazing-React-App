import React from 'react';
import {Polar} from 'react-chartjs-2';
import {data} from './polarConfig';

class PolarChart extends React.Component {

  render() {
    return (
        <Polar
          data={data}
          height={230}
        />
    );
  }
};

export default PolarChart;
