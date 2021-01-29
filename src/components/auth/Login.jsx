import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import { useAlert } from '../util/Hooks';

const Login = (props) => {
  const { alert, setAlert } = useAlert();
  const authContext = useContext(AuthContext);

  // const { setAlert } = alertContext;
  const {
    login,
    error,

    isAuthenticated,
  } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/admin');
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert({ message: 'Please fill in all fields', type: 'empty' });
    } else {
      login({
        email,
        password,
      });
    }
    login({
      email,
      password,
    });
  };

  return (
    <div className="flex justify-center my-5">
      <div className="max-w-sm">
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        >
          {/* THIS ARE LOCAL ERRORS */}
          {alert.type === 'empty' && (
            <h1 className="error_message">{alert.message}</h1>
          )}

          {/* THIS IS A GENERAL ERROR */}
          {error && <h1 className="error_message">{error}</h1>}

          <h1 className="text-center my-3">
            Account <span className="text-primary">Login</span>
          </h1>

          <label htmlFor="email">Email Address</label>
          <input
            className="test"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            className="test"
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />

          <input type="submit" value="Login" className="simple-button" />
        </form>
      </div>
    </div>
  );
};

export default Login;
