'use strict';

// Libs
import React from 'react';

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

const COLORS = ['#FF8080', '#80FFB7', '#C680FF', '#80FFFD', '#FFDD80', '#80D0FF', '#FF80CA', '#D5FF80', '#8097FF', '#FFAE80'];

const Charts = ({users}) => {
  return (
    <div className="charts">
      {METRICS.map((metric, i) => (
        <Chart key={i} className={metric.type} data={{
          title: metric.title,
          chart: metric.chart,
          users: users.map(user => user.name),
          values: users.map(user => user[metric.type]),
          colors: users.map((user, i) => COLORS[i])
        }} />
      ))}
    </div>
  );
}

export default Charts;
