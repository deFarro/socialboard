'use strict';

// Libs
import React from 'react';
import { PropTypes } from 'prop-types';

// Style
import '../../scss/Charts.scss';

// Components
import Chart from './chart';

const Charts = ({users, months, metrics}) => {
  return (
    <div className="charts">
      {metrics.map((metric, i) => (
        <Chart key={i} className={metric.type} months={months} data={{
          title: metric.title,
          chart: metric.chart,
          users: users.map(user => user.name),
          values: users.map(user => user[metric.type]),
          colors: users.map(user => user.color)
        }} />
      ))}
    </div>
  );
}

Charts.propTypes = {
  users: PropTypes.array.isRequired,
  months: PropTypes.array.isRequired,
  metrics: PropTypes.array.isRequired
}

export default Charts;
