import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';
// import { GoogleLogin } from 'react-google-login'????????;

export default function Login () {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div className="login-container">
      {data ? (
        <p>
          Great!
        </p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="login-input-container">
            <input 
              name="email" 
              className="login-email" 
              type="email"
              value={formState.email}
              placeholder="email"
              onChange={handleChange}
            ></input>
            <input 
              name="password" 
              className="login-password" 
              placeholder="password"
              type="password"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <button 
            className="submit-login"
            type="submit"
            >
              submit
            </button>
          </div>
        </form>
      )}

      {error && (
        <div className="my-3 p-3 bg-danger text-white">
          {error.message}
        </div>
      )}

    </div>
  )
};