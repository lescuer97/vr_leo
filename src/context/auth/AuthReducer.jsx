import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SEND_ERROR,
  DELETE_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    case SEND_ERROR:
      // this grabs all the errors and depending of that it will  send diferent errors
      switch (action.payload) {
        case 'auth/email-already-in-use':
          return {
            ...state,
            error: 'This email is already in use',
          };
        case 'auth/invalid-email' || 'auth/wrong-password':
          return {
            ...state,
            error: 'Your email or password are wrong',
          };
        case 'auth/user-disabled':
          return {
            ...state,
            error: 'Your account was disabled please contact us',
          };
        case 'auth/argument-error':
          return {
            ...state,
            error: 'Some of the values where wrong',
          };
        case 'auth/user-not-found':
          return {
            ...state,
            error: 'Your email or password is invalid',
          };

        default:
          return {
            error: 'Something went wrong',
          };
      }
    case DELETE_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
