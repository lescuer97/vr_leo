import React, { useReducer } from 'react';

import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SEND_ERROR,
  DELETE_ERROR,
} from '../types';

import { auth } from '../../firebase/firebase';

const AuthState = (props) => {
  let item = window.localStorage.getItem('auth');
  if (item === 'true') {
    item = true;
  } else {
    item = false;
  }

  const initialState = {
    isAuthenticated: item || null,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = async (form) => {
    try {
      const res = await auth.signInWithEmailAndPassword(
        form.email,
        form.password
      );
      auth.onAuthStateChanged(function (user) {
        if (user) {
          // this creates a local storage for the objects of authentification
          window.localStorage.setItem('auth', true);
          dispatch({
            type: LOGIN_SUCCESS,
          });
        } else {
          window.localStorage.setItem('auth', false);
          dispatch({
            type: LOGIN_FAIL,
          });
        }
        console.log(res);
      });
    } catch (err) {
      dispatch({ type: SEND_ERROR, payload: err.code });

      setTimeout(() => {
        dispatch({ type: DELETE_ERROR });
      }, [4000]);
    }
  };
  const register = async (form) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );

      console.log(res);
    } catch (err) {
      const errorCode = err.code;
      dispatch({ type: SEND_ERROR, payload: errorCode });

      setTimeout(() => {
        dispatch({ type: DELETE_ERROR });
      }, [4000]);
    }
  };

  const logout = () => {
    auth.signOut();
    window.localStorage.setItem('auth', false);
    dispatch({
      type: LOGOUT,
    });
  };
  const checkLogin = async () => {
    try {
      await auth.onAuthStateChanged(function (user) {
        if (user) {
          window.localStorage.setItem('auth', true);
          dispatch({
            type: LOGIN_SUCCESS,
          });
        } else {
          window.localStorage.setItem('auth', false);
          dispatch({
            type: LOGIN_FAIL,
          });
        }
      });
    } catch (err) {
      const errorCode = err.code;
      console.log(errorCode);
      // dispatch({ type: SEND_ERROR, payload: errorCode });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        login,
        register,
        logout,
        checkLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
