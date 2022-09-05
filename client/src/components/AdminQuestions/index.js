import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_CONNECTION, UPDATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth'
import './admin.css';


//missing functionality to text boxes

export default function Admin({adminState, setAdminState}) {

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
    
    if (name === "connection") {
      //do something else
    } else {
    setLocalAdminState({
      ...localAdminState,
      [name]: value,
    });
  }
  console.log(localAdminState)
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
        <div className='custom-container'>
          <div className='edit-profile-container row'>
            <div className='col-12 col-md-7 text-center'>
              <img src='https://avatars.githubusercontent.com/u/74509058?v=4' alt='user avatar'
                className='rounded img-thumbnail' />
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


              <h2 id='username'>murderclaws56</h2>
              <h3>Connection ID: <span id='user-id'>763djnf973</span></h3>
              <h4>Edit your profile.</h4>
              <form className='custom-text-align' onSubmit={handleFormSubmit}>
                <div className='form-group'>
                  <label htmlFor='inputUsername'>Username</label>
                  <input onChange={handleUserInfoChange} name='username' type='text' className='form-control' id='inputUsername' placeholder='Username' />
                </div>

                <div className='form-group'>
                  <label htmlFor='inputPassword'>Password</label>
                  <input onChange={handleUserInfoChange} name='password' type='password' className='form-control' id='inputPassword' placeholder='Password' />
                </div>

                <div className='form-group'>
                  <label htmlFor='confirmPassword'>Confirm Password</label>
                  <input onChange={handleUserInfoChange} name='confirm-password' type='password' className='form-control' id='confirmPassword' placeholder='Confirm Password' />
                </div>

                <div className='form-group'>
                  <label htmlFor='inputEmail'>Email</label>
                  <input onChange={handleUserInfoChange} name='email' type='email' className='form-control' id='inputEmail' placeholder='Email Address' />
                  <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                </div>

                <div className='row'>
                  <div className='col'>
                    <label htmlFor='allergies'>Allergies</label>
                    <input onChange={handleUserInfoChange} name='allergies' type='text' className='form-control' id='allergies' placeholder='Allergies' />
                  </div>
                  <div className='col'>
                    <label htmlFor='hobbies'>Hobbies</label>
                    <input onChange={handleUserInfoChange} name='hobbies' type='text' className='form-control' id='hobbies' placeholder='Hobbies' />
                  </div>
                </div>

                <div className='row'>
                  <div className='col'>
                    <label htmlFor='faveFoods'>Favorite Foods</label>
                    <input onChange={handleUserInfoChange} name='faveFoods' type='text' className='form-control' id='faveFoods' placeholder='Foods I Like' />
                  </div>
                  <div className='col'>
                    <label htmlFor='hateFoods'>Loathed Foods</label>
                    <input onChange={handleUserInfoChange} name='hateFoods' type='text' className='form-control' id='hateFoods' placeholder='Foods I Dislike' />
                  </div>
                </div>

                <div className='row'>
                  <div className='col'>
                    <label htmlFor='phobias'>Phobias</label>
                    <input onChange={handleUserInfoChange} name='phobias' type='text' className='form-control' id='phobias' placeholder='Phobias' />
                  </div>
                  <div className='col'>
                    <label htmlFor='birthday'>Birthday</label>
                    <input onChange={handleUserInfoChange} name='birthday' type='text' className='form-control'
                      id='birthday' placeholder='Birthday' />
                  </div>
                </div>
              </form>
              <br />
              <br />

              <h3 className='text-center'>Edit Connections</h3>

              <div className='input-group mb-3'>
                <input onChange={handleUserInfoChange} name='connection' type='text' className='form-control' placeholder='Enter Connection ID' />
                <div className='input-group-append'>
                  <button className='btn btn-outline-info' type='button'>Add Connection</button>
                </div>
              </div>

              {/* The following list needs to be dynamically rendered for every connection */}
              <ul className='list-group'>
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                  <span id='connection-name'>Connection Name 1</span>
                  <button className='btn btn-outline-danger' type='button'>Delete Connection</button>
                </li>
              </ul>

              <br />
              <div className='text-center'>
                <button className='btn btn-info btn-margin'>Save Changes</button>
                <button className='btn btn-danger btn-margin'>Delete Account</button>
              </div>


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
