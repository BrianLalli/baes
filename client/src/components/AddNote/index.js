import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_NOTE } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './addNote.css'


const AddNote = () => {
  const [formState, setFormState] = useState({
    content: '',
  });
  const [characterCount, setCharacterCount] = useState(0);
  const [addNote, { error }] = useMutation(ADD_NOTE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const {data} = addNote({
        variable: { ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'content' && value.length <= 280) {
      setFormState({ ...formState, [name]: value});
      setCharacterCount(value.length);
    } else if (name !== 'content') {
      setFormState({ ...formState, [name]: value });
    }
  }

  return (
    <div className ='container mt-5' id='addNote'>
      <div className='row justify-content-md-center'>
      <h3 className='col-12 col-lg-9'>Add a Note about your Connection</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`col-12 col-lg-9 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="col-12 col-lg-9" 
            onSubmit={handleFormSubmit}
          >
            
              <textarea
                name="content"
                placeholder="Add a note..."
                value={formState.content}
                className="form-input col-12"
                // style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>

            <div className="col-12 col-lg-3">
              <button className="btn btn-info btn-block py-3" type="submit">
                Add Note
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or 
        </p>
      )}
    </div>
    </div>
  );
};

export default AddNote;
