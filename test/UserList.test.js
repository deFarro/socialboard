// Libs
import React from 'react';
import { shallow } from 'enzyme';

// Component
import UserList from '../src/js/components/UserList';

describe('UserList Component', () => {
  const users = [
    {name: 'Nick Svetlov', id: 73958472903, socialName: 'twitter'},
    {name: 'Jack de Farro', id: 27382738495, socialName: 'facebook'},
    {name: 'Joey Tribbiani', id: 73029493840, socialName: 'instagram'}
  ];
  const handleClick = () => {};

  test('should create list of all passed users', () => {
    const wrapper = shallow(<UserList users={users} handleClick={handleClick} />);
    expect(wrapper.find('li')).toHaveLength(users.length);
  });

  test('should listen delete click', () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(<UserList users={users} handleClick={mockHandler} />);
    wrapper.find('.delete').forEach(node => node.simulate('click'));
    expect(mockHandler).toHaveBeenCalledTimes(users.length);
  });

  test('should contain social network icons', () => {
    const wrapper = shallow(<UserList users={users} handleClick={handleClick} />);
    expect(wrapper.find('.fa-twitter')).toHaveLength(1);
    expect(wrapper.find('.fa-facebook')).toHaveLength(1);
    expect(wrapper.find('.fa-instagram')).toHaveLength(1);
  });
});
