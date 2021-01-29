/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
// import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/AuthContext';
import { useAlert } from '../util/Hooks';

const Register = (props) => {
  // const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { alert, setAlert } = useAlert();

  const { register, error } = authContext;
  



  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert({ message: 'Please enter all fields', type: 'empty' });
    } else if (password !== password2) {
      setAlert({ message: 'Passwords do not match', type: 'password' });
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="flex justify-center my-5">
      <div className="max-w-sm">
        {alert.type === 'empty' && (
          <h1 className="error_message">{alert.message}</h1>
        )}
        {alert.type === 'password' && (
          <h1 className="error_message">{alert.message}</h1>
        )}
        {error && <h1 className="error_message">{error}</h1>}
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        >
          <h1>
            Account
            <span className="text-primary">Register</span>
          </h1>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="test"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="email"
            >
              Email{' '}
            </label>
            <input
              className="test"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="test"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              minLength="6"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="password2"
            >
              Confirm Password
            </label>
            <input
              className="test"
              id="password2"
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              required
              minLength="6"
            />
          </div>
          <input type="submit" value="Register" className="simple-button" />
        </form>
      </div>
    </div>
  );
};

export default Register;
