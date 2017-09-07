// Libs
import React from 'react';
import { shallow } from 'enzyme';

// Component
import Navigation from '../src/js/components/Navigation';

describe('Navigation Component', () => {
  test('should highlight proper tebs', () => {
    const mockActive = ['twitter', 'instagram'];

    const wrapper = shallow(<Navigation active={mockActive} />);
    expect(wrapper.find('.twitter')).toHaveLength(1);
    expect(wrapper.find('.empty')).toHaveLength(1);
    expect(wrapper.find('.twitter')).toHaveLength(1);
  });
})
