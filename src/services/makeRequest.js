import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../utils/Axios';

export const get_request = async url => {
  try {
    const token = await AsyncStorage.getItem('token');
    let config = {
      headers: {Authorization: 'Bearer ' + token},
    };
    return await axios.get(url, config);
  } catch (err) {
    console.log('get_request', err.response);
    return err;
  }
};

export const post_request = async (url, payload) => {
  try {
    const token = await AsyncStorage.getItem('token');
    console.log('Post Url', token);
    const options = {
      headers: {Authorization: `Bearer ${token}`},
    };
    return await axios.post(url, payload, options);
  } catch (err) {
    console.log('post_request', err.response);
    return err;
  }
};

export const patch_request = async (url, payload) => {
  try {
    const token = await AsyncStorage.getItem('token');
    console.log('Patch Url', token);
    const options = {
      headers: {Authorization: `Bearer ${token}`},
    };
    return await axios.patch(url, payload, options);
  } catch (err) {
    console.log('patch_request', err.response);
    return err;
  }
};

export const request = async ({route, method, payload, params}) => {
  const token = await AsyncStorage.getItem('token');
  method = method ?? 'get';
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  if (!token) {
    delete headers.Authorization;
  }
  return await axios({
    data: payload,
    url: `/${route}`,
    method,
    headers,
    params,
  });
};
