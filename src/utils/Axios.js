import axios from 'axios';
import {db_url} from '../utils/Constant';

const instance = axios.create({
  baseURL: db_url,
});

export default instance;
