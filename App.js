import React from 'react';
import Routes from './src/routes/index';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from './src/store/Store';

const store = configureStore();
const App = () => {
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
