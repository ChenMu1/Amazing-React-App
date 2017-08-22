import React from 'react';
import {Bubble} from 'react-chartjs-2';
import { data } from './bubbleConfig';

class BubbleChart extends React.Component {
  render() {
    return (
        <Bubble data={data} />
    );
  }
};

export default BubbleChart;
