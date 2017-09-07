// Libs
import React from 'react';
import { shallow } from 'enzyme';

// Component
import SubmitButton from '../src/js/components/SubmitButton';

describe('SubmitButton Component', () => {
  test('should have proper error class', () => {
    const wrapper = shallow(<SubmitButton status='error' />);
    expect(wrapper.find('.error')).toHaveLength(1);
  });

  test('should have proper full class', () => {
    const wrapper = shallow(<SubmitButton status='full' />);
    expect(wrapper.find('.full')).toHaveLength(1);
  });

  test('should have proper error text', () => {
    const wrapper = shallow(<SubmitButton status='error' />);
    expect(wrapper.text()).toEqual('USER NOT FOUND');
  });
  
  test('should have proper full text', () => {
    const wrapper = shallow(<SubmitButton status='full' />);
    expect(wrapper.text()).toEqual('10 USERS ADDED');
  });
});
