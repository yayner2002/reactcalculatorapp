import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('correctlly renders a component', () => {
  test('should render home component', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
