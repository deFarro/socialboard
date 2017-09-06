'use strict';

// Libs
import React from 'react';
import Chart from 'chart.js';
import { PropTypes } from 'prop-types';

// Style
import '../../scss/Chart.scss';

class SingleChart extends React.Component {
  // Function to create proper configs for charts
  drawChart() {
    let config = {};
    // For pie charts
    if (this.props.data.chart !== 'line') {
      config = {
        type: this.props.data.chart,
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
      // For bar charts
      if (this.props.data.chart === 'bar' || this.props.data.chart === 'horizontalBar') {
        config.options.scales = {
          xAxes: [{
            scaleLabel: false,
            display: false,
            gridLines: {
                display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            }
          }],
          yAxes: [{
            scaleLabel: false,
            display: false,
            gridLines: {
                display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            }
          }]
        };
      }
    }
    // For line charts
    else {
      const labels = this.props.months;
      const datasets = [];

      for (let i = 0; i < this.props.data.users.length; i++) {
        datasets.push({
          label: this.props.data.users[i],
          backgroundColor: this.props.data.colors[i],
          borderColor: this.props.data.colors[i],
          data: this.props.data.values[i],
          fill: false,
        });
      }

      config = {
        type: this.props.data.chart,
        data: {
          labels,
          datasets
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
          },
          layout: {
            padding: {
              left: 5,
              right: 5
            }
          },
          scales: {
            xAxes: [{
              scaleLabel: false,
              display: false,
              gridLines: {
                  display: false
              },
              ticks: {
                display: false
              }
            }],
            yAxes: [{
              scaleLabel: false,
              display: false,
              gridLines: {
                  display: false
              },
              ticks: {
                display: false,
                suggestedMin: -1
              }
            }]
          }
        }
      };
    }
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
    return (
      <div className={'chart ' + this.props.className}>
        <canvas ref={element => this.canvas = element}></canvas>
      </div>
    );
  }
}

SingleChart.propTypes = {
  months: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired
}

export default SingleChart;
