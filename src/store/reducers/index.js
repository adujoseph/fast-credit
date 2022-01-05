import {combineReducers} from 'redux';
import UserReducer from './UserReducer/UserReducer';

const rootReducer = combineReducers({
  user: UserReducer,
});

export default rootReducer;
