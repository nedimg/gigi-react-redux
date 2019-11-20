import * as Api from "../helpers/Api";

export const LOAD_USER = "LOAD_USER";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export function increase() {
  return {
    type: "INCREASE_COUNT"
  };
}

export function decrease() {
  return {
    type: "DECREASE_COUNT"
  };
}

export function loadUser() {
  // instead of return {} we return a function
  return function(dispatch) {
    dispatch({ type: LOAD_USER });
    Api.loadUser().then(
      user => {
        dispatch({ type: LOAD_USER_SUCCESS, payload: { user } });
      },
      error => {
        dispatch({ type: LOAD_USER_SUCCESS, payload: { error } });
      }
    );
  };
}

export function updateUser(user) {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: { user }
  };
}

export function updateUserAsync(payload) {
  return function(dispatch) {
    dispatch({ type: UPDATE_USER });
    Api.saveUser(payload).then(
      user => {
        dispatch({ type: UPDATE_USER_SUCCESS, payload: { user } });
      },
      error => {
        dispatch({ type: UPDATE_USER_SUCCESS, payload: { error } });
      }
    );
  };
}
