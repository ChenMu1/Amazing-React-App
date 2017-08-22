const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
      label: 'Sales',
      type:'line',
      data: [51, 65, 40, 49, 60, 37, 40],
      fill: false,
      borderColor: '#48A6F2',
      backgroundColor: '#48A6F2',
      pointBorderColor: '#48A6F2',
      pointBackgroundColor: '#48A6F2',
      pointHoverBackgroundColor: '#48A6F2',
      pointHoverBorderColor: '#48A6F2',
      yAxisID: 'y-axis-2'
    },{
      type: 'bar',
      label: 'Visitor',
      data: [200, 185, 590, 621, 250, 400, 95],
      fill: false,
      backgroundColor: 'rgba(255,99,132,0.4)',
      borderColor: 'rgba(255,99,132,0.4)',
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,0.4)',
      yAxisID: 'y-axis-1'
    }]
};

const options = {
  responsive: true,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ]
  }
};

export {
  data,
  options,
}
