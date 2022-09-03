import React, { useState } from 'react';
import './styles.css';
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

  // error form
  const handleErrorSubmit = async (event) => {
    event.preventDefault();

  }

  return (
    <div className="login-container">

      <div>
        <h4>Login</h4>
      </div>

      <div className="login-form-container">
        {data ? (
          <p>
            Great!
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
              <input 
                name="email" 
                className="form-input" 
                type="email"
                value={formState.email}
                placeholder="email"
                onChange={handleChange}
              ></input>
              <input 
                name="password" 
                className="form-input" 
                placeholder="password"
                type="password"
                onChange={handleChange}
              ></input>
              <div>
                <button 
                className="submit-login-button"
                type="submit"
                >
                  submit
                </button>
              </div>
          </form>
        )}

      {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {console.log(error)}
          </div>
        )}
      </div>
    </div>
  )
};