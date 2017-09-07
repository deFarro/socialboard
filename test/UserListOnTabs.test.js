// Libs
import React from 'react';
import { shallow } from 'enzyme';

// Component
import UserListOnTabs from '../src/js/components/UserListOnTabs';

describe('UserListOnTabs Component', () => {
  const users = [
    {name: 'Stan Marsh', id: 73958472903, social: 'twitter', posts: 65, friends: 1859, likes: 1164 , comments: 340, reposts: 214, postsInLastMonth: 3 , postsInLastWeek: 9, postsMap: [13, 9, 13, 17, 5, 15, 12, 20, 3, 17, 3, 9]},
    {name: 'Kyle Broflovski', id: 27382738495, social: 'facebook', posts: 265, friends: 859, likes: 224 , comments: 140, reposts: 54, postsInLastMonth: 15 , postsInLastWeek: 2, postsMap: [13, 6, 10, 5, 18, 16, 1, 2, 9, 6, 15, 2]},
    {name: 'Eric Cartman', id: 73029493840, social: 'instagram', posts: 165, friends: 59, likes: 90 , comments: 1140, reposts: 23, postsInLastMonth: 11 , postsInLastWeek: 1, postsMap: [3, 19, 1, 17, 19, 6, 8, 14, 18, 12, 11, 1]}
  ];
  const handleClick = () => {};
  const active = [true, true, true];

  test('should create list of all passed users', () => {
    const wrapper = shallow(<UserListOnTabs users={users} handleRemove={handleClick} handleToggle={handleClick} active={active} />);
    expect(wrapper.find('li')).toHaveLength(users.length);
  });

  test('should listen delete click', () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(<UserListOnTabs users={users} handleRemove={mockHandler} handleToggle={handleClick} active={active} />);
    wrapper.find('.delete').forEach(node => node.simulate('click'));
    expect(mockHandler).toHaveBeenCalledTimes(users.length);
  });

  test('should listen toggle click', () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(<UserListOnTabs users={users} handleRemove={handleClick} handleToggle={mockHandler} active={active} />);
    wrapper.find('.show').forEach(node => node.simulate('click'));
    expect(mockHandler).toHaveBeenCalledTimes(users.length);
  });

  test('should toggle users', () => {
    const mocActive = [true, false, false];
    const wrapper = shallow(<UserListOnTabs users={users} handleRemove={handleClick} handleToggle={handleClick} active={mocActive} />);
    expect(wrapper.find('.show')).toHaveLength(1);
    expect(wrapper.find('.crossed')).toHaveLength(2);
  });

  test('should toggle correct user', () => {
    const testUser = 1;
    let toggledIndex;
    const mockHandler = index => toggledIndex = index;

    const wrapper = shallow(<UserListOnTabs users={users} handleRemove={handleClick} handleToggle={mockHandler} active={active} />);
    wrapper.find('.show').at(testUser).simulate('click');
    expect(toggledIndex).toEqual(testUser);
  });

  test('should contain proper color lables', () => {
    users[0].color = 'red';
    users[1].color = 'green';
    users[2].color = 'blue';

    const wrapper = shallow(<UserListOnTabs users={users} handleRemove={handleClick} handleToggle={handleClick} active={active} />);
    expect(wrapper.find('.fa-square').at(0).props().style.color).toEqual('red');
    expect(wrapper.find('.fa-square').at(1).props().style.color).toEqual('green');
    expect(wrapper.find('.fa-square').at(2).props().style.color).toEqual('blue');
  });
});
