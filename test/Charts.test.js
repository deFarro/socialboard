// Libs
import React from 'react';
import { shallow } from 'enzyme';

// Component
import Charts from '../src/js/components/Charts';

describe('Charts Component', () => {
  const users = [
    {name: 'Stan Marsh', id: 73958472903, social: 'twitter', posts: 65, friends: 1859, likes: 1164 , comments: 340, reposts: 214, postsInLastMonth: 3 , postsInLastWeek: 9, postsMap: [13, 9, 13, 17, 5, 15, 12, 20, 3, 17, 3, 9]},
    {name: 'Kyle Broflovski', id: 27382738495, social: 'facebook', posts: 265, friends: 859, likes: 224 , comments: 140, reposts: 54, postsInLastMonth: 15 , postsInLastWeek: 2, postsMap: [13, 6, 10, 5, 18, 16, 1, 2, 9, 6, 15, 2]},
    {name: 'Eric Cartman', id: 73029493840, social: 'instagram', posts: 165, friends: 59, likes: 90 , comments: 1140, reposts: 23, postsInLastMonth: 11 , postsInLastWeek: 1, postsMap: [3, 19, 1, 17, 19, 6, 8, 14, 18, 12, 11, 1]}
  ];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const metrics = [
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
      type: 'postsMap',
      title: 'Posts last 12 months',
      chart: 'line'
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

  test('should create charts for all require types', () => {
    const wrapper = shallow(<Charts users={users} months={months} metrics={metrics} />);
    expect(wrapper.children()).toHaveLength(metrics.length);
  });
});
