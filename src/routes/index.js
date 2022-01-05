import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoute from './stackRoutes/StackRoute';

const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
  );
};

export default Routes;
