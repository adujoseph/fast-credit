import React from 'react';
import Routes from './src/routes/index';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from './src/store/Store';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const store = configureStore();
const App = () => {
  (async function getAppToken() {
    try {
      const url = 'https://fastcredit-ng.com:1102/v1/fclapi/login';
      const payload = {
        Client_key: 'fcluser',
        Client_secret: 'f@3*c#4luser',
      };
      const response = await axios.post(url, payload);
      console.log('Data: ', response.data);
      await AsyncStorage.setItem('api_token', response.data.token);
    } catch (err) {
      console.log(err);
    }
  })();
  LogBox.ignoreAllLogs();
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
