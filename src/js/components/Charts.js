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
    title: 'Total posts'
  },
  {
    type: 'friends',
    title: 'Total friends',
  },
  {
    type: 'likes',
    title: 'Likes received',
  },
  {
    type: 'comments',
    title: 'Comments left',
  },
  {
    type: 'reposts',
    title: 'Own posts get reposted',
  },
  {
    type: 'postsInLastMonth',
    title: 'Posts last month',
  },
  {
    type: 'postsInLastWeek',
    title: 'Posts last week',
  }
];

const COLORS = ['blue', 'teal', 'purple', 'yellow', 'orange', 'green', 'pink', 'lightblue', 'darkgreen', 'brown'];

const Charts = ({users}) => {
  return (
    <div className="charts">
      <Chart data={{
          title: METRICS[0].title,
          users: users.map(user => user.name),
          values: users.map(user => user[METRICS[0].type]),
          colors: users.map((user, i) => COLORS[i])
        }} />
    </div>
  );
}

export default Charts;
