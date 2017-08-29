// Libs
import React from 'react';

// Component
import App from '../src/js/components/App';

describe('App', () => {
  test('should be React component', () => {
    let instance = App.prototype instanceof React.Component;
    expect(instance).toBe(true);
  });
});
