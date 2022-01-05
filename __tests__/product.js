import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../src/screen/productDetails/ProductDetails';

test('product renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});
