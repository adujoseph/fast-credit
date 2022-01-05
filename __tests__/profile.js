import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../src/screen/profile/ProfileScreen';

test('profile renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});
