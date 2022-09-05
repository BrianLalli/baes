import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_CONNECTION, UPDATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth'
import './admin.css';

//missing functionality to text boxes

export default function Admin ({adminState, setAdminState}) {

  const [localAdminState, setLocalAdminState] = useState(adminState)

 //mutation to fetch data
 //add logic to populate form fields
 //logic to save state of each input that user submits
 //click save changes -> mutuation to update user 

const [updateUser , { error, data }] = useMutation(UPDATE_USER);
// const [addConnection, { error, data }] = useMutation(ADD_CONNECTION);

  // update state based on form input changes
  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "connections") {
      //do something else
    } else {
    setLocalAdminState({
      ...localAdminState,
      [name]: value,
    });
  }
  console.log(adminState)
  };

  // const handleConnectionChange = (e) => {

  // }


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const {data} = await updateUser({
        variables: { localAdminState },
      });
    
      setAdminState({localAdminState});
      console.log("adminstate", adminState)
      console.log("localstate", localAdminState)
    } catch (err) {
      console.error(err);
    }
  };

  // error form
  const handleErrorSubmit = async (e) => {
    e.preventDefault();

  }

  return (
    <div>
    {Auth.loggedIn() ? (
      <div className='container'>
      <div className='edit-profile-container row justify-content-center'>
        <div className='col-12 col-md-7 text-center align-items-center'>
          <img src='https://avatars.githubusercontent.com/u/74509058?v=4' alt='user avatar'
            className='img-circle img-thumbnail' />

          <h2 id='username'>Testing</h2>
          <h3>Connection ID: <span id='user-id'>763djnf973</span></h3>
          <h3>Edit your profile.</h3>
          <form onSubmit={handleFormSubmit}>
            <div className='form-group custom-text-align'>
              <label htmlFor='inputUsername'>Username</label>
              <input onChange={handleUserInfoChange} name='username' type='text' className='form-control' id='inputUsername' placeholder={adminState.username}/>
            </div>
    
            <div className='form-group custom-text-align'>
              <label htmlFor='inputPassword'>Password</label>
              <input onChange={handleUserInfoChange} name='password' type='password' className='form-control' id='inputPassword' placeholder='Password' />
            </div>
    
            <div className='form-group custom-text-align'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input onChange={handleUserInfoChange} name='confirm-password' type='password' className='form-control' id='confirmPassword' placeholder='Confirm Password' />
            </div>
    
            <div className='form-group custom-text-align'>
              <label htmlFor='inputEmail'>Email</label>
              <input onChange={handleUserInfoChange} name='email' type='email' className='form-control' id='inputEmail' placeholder='Email Address' />
              <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
            </div>
    
            <div className='form-row'>
              <div className='form-group col-md-6 custom-text-align'>
                <label htmlFor='inputAllergies'>Allergies</label>
                <input onChange={handleUserInfoChange} name='allergies' type='text' className='form-control' id='inputAllergies' placeholder='Allergies' />
              </div>
              <div className='form-group col-md-6 custom-text-align'>
                <label htmlFor='inputHobbies'>Hobbies</label>
                <input onChange={handleUserInfoChange} name='hobbies' type='text' className='form-control' id='inputHobbies' placeholder='Hobbies' />
              </div>
            </div>
    
            <div className='form-row'>
              <div className='form-group col-md-6 custom-text-align'>
                <label htmlFor='inputFaveFoods'>Favorite Foods</label>
                <input onChange={handleUserInfoChange} name='faveFoods' type='text' className='form-control' id='inputFaveFoods' placeholder='Foods I Like' />
              </div>
              <div className='form-group col-md-6 custom-text-align'>
                <label htmlFor='inputHateFoods'>Loathed Foods</label>
                <input onChange={handleUserInfoChange} name='hateFoods' type='text' className='form-control' id='inputHateFoods' placeholder='Foods I Dislike' />
              </div>
            </div>
    
            <div className='form-row'>
              <div className='form-group col-md-6 custom-text-align'>
                <label htmlFor='inputPhobias'>Phobias</label>
                <input onChange={handleUserInfoChange} name='phobias' type='text' className='form-control' id='inputPhobias' placeholder='Phobias' />
              </div>
              <div className='form-group col-md-6 custom-text-align'>
                <label htmlFor='inputBirthday'>Birthday</label>
                <input onChange={handleUserInfoChange} name='birthday' type='text' className='form-control' id='inputBirthday' placeholder='Birthday' />
              </div>
            </div>
    
            {/* Might need to redesign Add Connection Section */}
            <div className='input-group mb-3'>
              <input onChange={handleUserInfoChange} name='connection' type='text' className='form-control' placeholder='Connection ID' aria-label='Enter Connection ID'
                aria-describedby='button-addon2' />
              <div className='input-group-append'>
                <button className='btn btn-outline-secondary' type='button' id='button-addon2'>Add Connection</button>
              </div>
            </div>
            {/* <div className='input-group mb-3'>
              <input onChange={handleChange} name='' type='text' className='form-control' placeholder='Connection ID' aria-label='Enter Connection ID'
                aria-describedby='button-addon2' />
              <div className='input-group-append'>
                <button className='btn btn-outline-secondary' type='button' id='button-addon2'>Add Connection</button>
              </div>
            </div> */}
          
            <div className='text-center'>
              <button className='btn btn-info'>Save Changes</button>
              <button className='btn btn-danger'>Delete Account</button>
            </div>
        </form>
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

//need to add 'delete connection' option