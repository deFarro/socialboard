'use strict';

// Libs
import React from 'react';
import Chart from 'chart.js';

// Style
import '../../scss/Chart.scss';

class singleChart extends React.Component {
  drawChart() {
    const config = {
      type: 'pie',
      data: {
        datasets: [{
          data: [...this.props.data.values],
          backgroundColor: [...this.props.data.colors],
          label: this.props.data.title
        }],
        labels: [...this.props.data.users]
      },
      options: {
        title: {
          display: true,
          text: this.props.data.title,
          fontSize: 16,
          fontStyle: 'normal'
        },
        legend: {
          display: false
        }
      }
    };
    this.chart = new Chart(this.canvas.getContext('2d'), config);
  }
  componentDidMount() {
    this.drawChart();
  }
  componentDidUpdate() {
    this.chart.destroy();
    this.drawChart();
  }
  render() {
    return <canvas ref={element => this.canvas = element}></canvas>
  }
}

export default singleChart;
