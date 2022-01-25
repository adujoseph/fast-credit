import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../utils/Axios';

export const auth_request = async (url, payload) => {
  try {
    const token = await AsyncStorage.getItem('api_token');
    console.log('Api Token', token);
    const options = {
      headers: {Authorization: `Bearer ${token}`},
    };
    return await axios.post(url, payload, options);
  } catch (err) {
    console.log('error on auth request', err.response);
    return err.response;
  }
};
