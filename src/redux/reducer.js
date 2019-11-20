import {
  UPDATE_USER,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS
} from "./actions";

const initialState = {
  counter: 0,
  user: undefined,
  isLoading: false,
  isSubmitting: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { ...state, counter: state.counter + 1 };
    case "DECREASE_COUNT":
      return { ...state, counter: state.counter - 1 };
    case LOAD_USER:
      return { ...state, isLoading: true };
    case LOAD_USER_SUCCESS:
      return { ...state, user: action.payload.user, isLoading: false };
    case LOAD_USER_FAILURE:
      return Object.assign({}, state, {
        user: undefined,
        isLoading: false,
        error: action.payload.error
      });
    case UPDATE_USER:
      return { ...state, isSubmitting: true };
    case UPDATE_USER_SUCCESS:
      return { ...state, user: action.payload.user, isSubmitting: false };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        user: undefined,
        isSubmitting: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

export default reducer;

function getUser(state) {
  return state.user;
}

function isSubmitting(state) {
  return state.isSubmitting;
}

export const selectors = { getUser, isSubmitting };
