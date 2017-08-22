import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
    '#ff6384',
    '#48A6F2',
    '#ffbf00'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#48A6F2',
    '#ffbf00'
    ]
  }]
});

class DynamicDoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = getState();
  }
	componentWillMount() {
		setInterval(() => {
			this.setState(getState());
		}, 5000);
	}
  render() {
    return (
        <Doughnut data={this.state} />
    );
  }
};

export default DynamicDoughnutChart;
