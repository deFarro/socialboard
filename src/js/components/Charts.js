'use strict';

// Libs
import React from 'react';
import { PropTypes } from 'prop-types';

// Style
import '../../scss/Charts.scss';

// Components
import Chart from './chart';

const METRICS = [
  {
    type: 'posts',
    title: 'Total posts',
    chart: 'pie'
  },
  {
    type: 'friends',
    title: 'Total friends',
    chart: 'pie'
  },
  {
    type: 'likes',
    title: 'Likes received',
    chart: 'bar'
  },
  {
    type: 'comments',
    title: 'Comments left',
    chart: 'horizontalBar'
  },
  {
    type: 'reposts',
    title: 'Own posts got reposted',
    chart: 'bar'
  },
  {
    type: 'postsInLastMonth',
    title: 'Posts last month',
    chart: 'pie'
  },
  {
    type: 'postsInLastWeek',
    title: 'Posts last week',
    chart: 'pie'
  }
];

const Charts = ({users, colors}) => {
  return (
    <div className="charts">
      {METRICS.map((metric, i) => (
        <Chart key={i} className={metric.type} data={{
          title: metric.title,
          chart: metric.chart,
          users: users.map(user => user.name),
          values: users.map(user => user[metric.type]),
          colors: users.map((user, i) => colors[i])
        }} />
      ))}
    </div>
  );
}

Charts.propTypes = {
  users: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired
}

export default Charts;
