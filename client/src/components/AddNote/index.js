import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_NOTE } from '../../utils/mutations';
import { QUERY_NOTES, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import './addNote.css'

const AddNote = () => {
  const [noteContent, setNoteContent] = useState('');

  // const [characterCount, setCharacterCount] = useState(0);

  const [addNote, { error }] = useMutation(ADD_NOTE, {
    update(cache, { data: { addNote } }) {
      try {
        const { notes } = cache.readQuery({ query: QUERY_NOTES });

        cache.writeQuery({
          query: QUERY_NOTES,
          data: { notes: [addNote, ...notes] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, notes: [...me.notes, addNote] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addNote({
        // variables: {
        //   title,
        //   content,
        //   date
        // },
      });

      setNoteContent('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'noteContent' && value.length <= 280) {
      setNoteContent(value);
      // setCharacterCount(value.length);
    }
  };

  return (
    <div className ='container mt-5' id='addNote'>
      <div className='row justify-content-md-center'>
      <h3 className='col-12 col-lg-9'>Add a Note about your Connection</h3>

      {Auth.loggedIn() ? (
        <>
          {/* <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p> */}
          <form
            className="col-12 col-lg-9" 
            onSubmit={handleFormSubmit}
          >
            
              <textarea
                name="noteContent"
                placeholder="Add a note..."
                value={noteContent}
                className="form-input col-12"
                // style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>

            <div className="col-12 col-lg-3">
              <button className="custom-save-btn btn-margin" type="submit">
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
