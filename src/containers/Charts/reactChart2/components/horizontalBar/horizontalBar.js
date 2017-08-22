import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import { data } from './horizontalConfig';

class HorizontalChart extends React.Component {
  render() {
    return (
        <HorizontalBar data={data} />
    );
  }
};

export default HorizontalChart;
