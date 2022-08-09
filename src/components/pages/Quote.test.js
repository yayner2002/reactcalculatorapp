import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('correctlly renders a component', () => {
  test('should render quote component', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
