import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Signup = ({signupState, setSignupState}) => {

  const [addProfile, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignupState({
      ...signupState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProfile({
        variables: { ...signupState },
      });

      Auth.signup(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    console.log(signupState)
  };

  return (
    <div className="signup-container">

      <div>
        <h4>Sign Up</h4>
      </div>

      <div className="signup-form-container">
        {data ? (
            <Link to="/admin"></Link>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="username"
              name="username"
              type="text"
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="email"
              name="email"
              type="email"
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="password"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <div className="submit-signup">
              <button
                className="submit-signup-button"
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
  </div>
  );
};

export default Signup;
