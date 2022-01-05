import {CHANGE_LANGUAGE, SET_ACTIVE_USER} from '../ActionTypes/ActionTypes';

export const setDefaultLang = payload => dispatch => {
  console.log('default language selected: ', payload);
  dispatch({
    type: CHANGE_LANGUAGE,
    payload: payload,
  });
};

export const activeUser = payload => dispatch => {
  console.log('active user: ', payload);
  dispatch({
    type: SET_ACTIVE_USER,
    payload: payload,
  });
};
