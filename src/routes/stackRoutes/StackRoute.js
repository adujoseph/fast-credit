import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screen/splashScreen/SplashScreen';
import LoginScreen from '../../screen/login/index';
import LoginScreen2 from '../../screen/loginScreen/LoginScreen';
import BottomStack from '../bottomRoutes';
import {splash, dash, login, loginscreen} from '../../constant/contant';
import {Colors} from '../../constant/theme';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator initialRouteName={splash}>
    <RootStack.Screen
      name={splash}
      component={SplashScreen}
      options={{
        headerTransparent: true,
        headerTitle: '',
        // headerTintColor: "#E96B03",
      }}
    />
    <RootStack.Screen
      name={dash}
      component={BottomStack}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
        headerShown: false,
      }}
    />
    <RootStack.Screen
      name={login}
      component={LoginScreen}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
      }}
    />
    <RootStack.Screen
      name={loginscreen}
      component={LoginScreen2}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: Colors.primary,
      }}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
