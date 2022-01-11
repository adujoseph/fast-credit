import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Splash from '../src/screen/splashScreen/SplashScreen';

test('profile renders correctly', () => {
  const tree = renderer.create(<Splash />).toJSON();
  expect(tree).toMatchSnapshot();
});
