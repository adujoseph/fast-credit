import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screen/splashScreen/SplashScreen';
import WelcomeScreen from '../../screen/welcome/index';
import LoginScreen2 from '../../screen/loginScreen/LoginScreen';
import AuthScreen from '../../screen/phoneAuth/PhoneAuth';
import RegisterScreen1 from '../../screen/register1/Register1';
import RegisterScreen2 from '../../screen/register2/Register2';
import FacialRecScreen from '../../screen/facial/FacialRecognition';
import ForgotPasswordScreen from '../../screen/forgotPassword/ForgotPassword';
import ResetPasswordScreen from '../../screen/resetPassword/ResetPassword';
import TermsScreen from '../../screen/terms/Terms';
import BottomStack from '../bottomRoutes';
import {
  splash,
  dash,
  login,
  loginscreen,
  register1,
  register2,
  facial,
  phone,
  forgot,
  reset,
  terms,
} from '../../constant/contant';
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
      component={WelcomeScreen}
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
    <RootStack.Screen
      name={phone}
      component={AuthScreen}
      options={{
        headerShown: false,
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: Colors.primary,
      }}
    />
    <RootStack.Screen
      name={register1}
      component={RegisterScreen1}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: Colors.primary,
      }}
    />
    <RootStack.Screen
      name={register2}
      component={RegisterScreen2}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: Colors.primary,
      }}
    />
    <RootStack.Screen
      name={facial}
      component={FacialRecScreen}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: Colors.primary,
      }}
    />
    <RootStack.Screen
      name={forgot}
      component={ForgotPasswordScreen}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: Colors.primary,
      }}
    />
    <RootStack.Screen
      name={reset}
      component={ResetPasswordScreen}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: Colors.primary,
      }}
    />
    <RootStack.Screen
      name={terms}
      component={TermsScreen}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: Colors.primary,
      }}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
