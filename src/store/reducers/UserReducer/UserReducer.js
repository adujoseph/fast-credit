import {
  CHANGE_LANGUAGE,
  SET_ACTIVE_USER,
} from '../../actions/ActionTypes/ActionTypes';

const initialState = {
  setLanguage: 'en',
  activeUser: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        setLanguage: action.payload,
      };
    case SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
