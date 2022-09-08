import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';

import { Link } from 'react-router-dom';
import { ADD_CONNECTION, DELETE_CONNECTION, UPDATE_USER, DELETE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth'
import './admin.css';
// import { QUERY_ME } from '../../utils/queries'


//missing functionality to text boxes

export default function Admin({ adminState, setAdminState }) {

  const [localAdminState, setLocalAdminState] = useState(adminState);
  const [connectionState, setConnectionState] = useState('');

  useEffect(() => {
    setLocalAdminState(adminState);
  }, [adminState]);

  //mutation to fetch data
  //add logic to populate form fields
  //logic to save state of each input that user submits
  //click save changes -> mutuation to update user 

  const [updateUser , { error: addUserError, data: addUserData }] = useMutation(UPDATE_USER);
  const [deleteUser, {error: delUserError, data: delUserData}] = useMutation(DELETE_USER);
  const [addConnection, { error: addError, data: addData }] = useMutation(ADD_CONNECTION); 
  const [deleteConnection, { error: deleteError, data: removeData }] = useMutation(DELETE_CONNECTION); 

  // update state based on form input changes
  const handleUserInfoChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    if (name === 'connection') {
      setConnectionState(value);
    }
    setLocalAdminState({
      ...localAdminState,
      [name]: value,
    });

    // console.log(localAdminState)
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateUser({
        variables: { ...localAdminState },
      });

      setAdminState({
        ...adminState,
        ...localAdminState
      });
      window.location.reload();
      // console.log("adminstate", adminState)
      // console.log("localstate", localAdminState)
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddConnection = async(e) => {
    e.preventDefault();

    try {
      // console.log("connection", connectionState);
      const { data } = await addConnection({
        variables: {"user": connectionState}
      })
      // console.log(data);
      setLocalAdminState({
        ...localAdminState,
        connections:data.addConnection.connections
      })
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  const handleRemoveConnection = async(e) => {
    e.preventDefault();
   console.log(e.target.value)

   try {
    const { data } = await deleteConnection({
      variables: {"user": e.target.value}
    }) 
    
    setLocalAdminState({
      ...localAdminState,
      connections: data.deleteConnection.connections
    })
   } catch (error) {
     console.error(error);
   }

  }

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = Auth.getProfile();
      console.log(data._id)
      const { data: deleteData } = await deleteUser({
        variables: {user: data._id }
      })
      setLocalAdminState({})
      Auth.logout()
      window.location.assign('/');
    } catch (error) {
      console.error(error);
    }
  };


  // error form
  const handleErrorSubmit = async (e) => {
    e.preventDefault();

    try {

    } catch (error) {
      console.error(error);
    }

  }

  return (
    <div>
      {Auth.loggedIn() ? (
        <div className='custom-container'>
          <div className='edit-profile-container row'>
            <div className='col-12 col-md-7 text-center'>
              <img src='paperheart.png' alt='user avatar'
                className='custom-img-thumbnail' />
              {/* possible modal with option to upload photo goes here */}
              {/* <br />
              <br />
              <form>
                <div className='form-group'>
                  <label htmlFor='uploadPhoto'>Upload Photo</label> 
                  <br/>
                  <input type='file' className='form-control-file' id='uploadPhoto' />
                </div>
              </form> */}


              <h2 id='username'>{localAdminState.username}</h2>
              <h4>Edit account information.</h4>
              <form className='custom-text-align' onSubmit={handleFormSubmit}>
                <div className='form-group'>
                  <label htmlFor='inputUsername'>Update Username</label>
                  <input onChange={handleUserInfoChange} name='username' type='text' className='custom-form' id='inputUsername' placeholder='username' value={localAdminState.username} />
                </div>

                {/* <div className='form-group'>
                  <label htmlFor='inputPassword'>Update Password</label>
                  <input onChange={handleUserInfoChange} name='password' type='password' className='custom-form' id='inputPassword' placeholder='******' />
                </div>
                <div className='form-group'>
                  <label htmlFor='confirmPassword'>Confirm Password</label>
                  <input onChange={handleUserInfoChange} name='confirm-password' type='password' className='custom-form' id='confirmPassword' placeholder='********' />
                </div> */}

                <div className='form-group'>
                  <label htmlFor='inputEmail'>Update Email</label>
                  <input onChange={handleUserInfoChange} name='email' type='email' className='custom-form' id='inputEmail' placeholder='whiskers@yahoo.com' value={localAdminState.email}/>
                  <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                </div>
                <br />
                <h4 className='text-center'>Optional fields to add to your profile.</h4>

                <div className='row'>
                  <div className='col'>
                    <label htmlFor='allergies'>Allergies</label>
                    <input onChange={handleUserInfoChange} name='allergies' type='text' className='custom-form' id='allergies' placeholder='Allergies' value={localAdminState.allergies}/>
                  </div>
                  <div className='col'>
                    <label htmlFor='hobbies'>Hobbies</label>
                    <input onChange={handleUserInfoChange} name='hobbies' type='text' className='custom-form' id='hobbies' placeholder='Hobbies' value={localAdminState.hobbies}/>
                  </div>
                </div>

                <div className='row'>
                  <div className='col'>
                    <label htmlFor='faveFoods'>Favorite Foods</label>
                    <input onChange={handleUserInfoChange} name='faveFoods' type='text' className='custom-form' id='faveFoods' placeholder='Foods I Like' value={localAdminState.faveFoods}/>
                  </div>
                  <div className='col'>
                    <label htmlFor='hateFoods'>Loathed Foods</label>
                    <input onChange={handleUserInfoChange} name='hateFoods' type='text' className='custom-form' id='hateFoods' placeholder='Foods I Dislike' value={localAdminState.hateFoods}/>
                  </div>
                </div>

                <div className='row'>
                  <div className='col'>
                    <label htmlFor='phobias'>Phobias</label>
                    <input onChange={handleUserInfoChange} name='phobias' type='text' className='custom-form' id='phobias' placeholder='Phobias' value={localAdminState.phobias}/>
                  </div>
                  <div className='col'>
                    <label htmlFor='birthday'>Birthday</label>
                    <input onChange={handleUserInfoChange} name='birthday' type='text' className='custom-form'
                      id='birthday' placeholder='Birthday' value={localAdminState.birthday}/>
                  </div>
                </div>
              <br />

              <div className='text-center'>
                <button className='btn btn-info btn-margin' type='submit'>Save Changes</button>
                <button className='btn btn-danger btn-margin' onClick={handleDeleteUser}>Delete Account</button>
              </div>
              </form>
              <br />

              <h4 className='text-center'>Edit Connections</h4>

              <div className='input-group mb-3'>
                <input name='connection' type='text' className='form-control' placeholder='Enter Connection Username' onChange={handleUserInfoChange}/>
                <div className='input-group-append'>
                  <button className='btn btn-outline-info' type='button' onClick={handleAddConnection}>Add Connection</button>
                </div>
              </div>

              {/* The following list needs to be dynamically rendered for every connection */}
              <ul className='list-group'>
                {localAdminState.connections?.map((connection) => (
                  <li className='list-group-item d-flex justify-content-between align-items-center'>
                    <span id='connection-name'>{connection.username}</span>
                    <button className='btn btn-outline-danger' type='button' onClick={handleRemoveConnection} value={connection._id}>Delete Connection</button>
                  </li>
                ))}

              </ul>

              <br />


            </div>
          </div>
        </div>
      ) : (
        <p>
          You need to be logged in to edit your profile. Please{' '}
          <Link to="/login">login or signup.</Link>
        </p>
      )}
    </div>
  )
}