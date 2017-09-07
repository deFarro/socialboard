// Libs
import React from 'react';
import { shallow } from 'enzyme';

// Component
import UserList from '../src/js/components/UserList';

describe('UserList Component', () => {
  const users = [
    {name: 'Stan Marsh', id: 73958472903, social: 'twitter', posts: 65, friends: 1859, likes: 1164 , comments: 340, reposts: 214, postsInLastMonth: 3 , postsInLastWeek: 9, postsMap: [13, 9, 13, 17, 5, 15, 12, 20, 3, 17, 3, 9]},
    {name: 'Kyle Broflovski', id: 27382738495, social: 'facebook', posts: 265, friends: 859, likes: 224 , comments: 140, reposts: 54, postsInLastMonth: 15 , postsInLastWeek: 2, postsMap: [13, 6, 10, 5, 18, 16, 1, 2, 9, 6, 15, 2]},
    {name: 'Eric Cartman', id: 73029493840, social: 'instagram', posts: 165, friends: 59, likes: 90 , comments: 1140, reposts: 23, postsInLastMonth: 11 , postsInLastWeek: 1, postsMap: [3, 19, 1, 17, 19, 6, 8, 14, 18, 12, 11, 1]}
  ];
  const handleClick = () => {};

  test('should create list of all passed users', () => {
    const wrapper = shallow(<UserList users={users} handleRemove={handleClick} />);
    expect(wrapper.find('li')).toHaveLength(users.length);
  });

  test('should listen delete click', () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(<UserList users={users} handleRemove={mockHandler} />);
    wrapper.find('.delete').forEach(node => node.simulate('click'));
    expect(mockHandler).toHaveBeenCalledTimes(users.length);
  });

  test('should contain social network icons', () => {
    const wrapper = shallow(<UserList users={users} handleRemove={handleClick} />);
    expect(wrapper.find('.fa-twitter')).toHaveLength(1);
    expect(wrapper.find('.fa-facebook')).toHaveLength(1);
    expect(wrapper.find('.fa-instagram')).toHaveLength(1);
  });
});
