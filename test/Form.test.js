// Libs
import React from 'react';
import { mount } from 'enzyme';

// Component
import Form from '../src/js/components/Form';

describe('Form Component', () => {
  const handleSubmit = () => {};

  test('should submit form', () => {
    const mockSumbit = jest.fn();
    const wrapper = mount(<Form handleSubmit={mockSumbit} />);
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(mockSumbit).toHaveBeenCalledTimes(1);
  });

  test('should return object with properties social and id', () => {
    let returned;
    const mockSumbit = (data) => returned = data;
    const wrapper = mount(<Form handleSubmit={mockSumbit} />);
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(returned).toHaveProperty('id');
    expect(returned).toHaveProperty('social');
  });
});
