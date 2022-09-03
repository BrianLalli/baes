import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
import './admin.css';

//missing functionality to text boxes

export default function Admin () {
 //mutation to fetch data
 //add logic to populate form fields
 //logic to save state of each input that user submits
 //click save changes -> mutuation to update user 
  return (
    <div className='container'>
    <div className='edit-profile-container row justify-content-center'>
      <div className='col-12 col-md-7 text-center align-items-center'>
        <img src='https://avatars.githubusercontent.com/u/74509058?v=4' alt='user avatar'
          className='img-circle img-thumbnail' />

        <h2 id='username'>murderclaws56</h2>
        <h3>Connection ID: <span id='user-id'>763djnf973</span></h3>
        <h3>Edit your profile.</h3>
        <form>
          <div className='form-group custom-text-align'>
            <label for='inputUsername'>Username</label>
            <input type='text' className='form-control' id='inputUsername' placeholder='Username' />
          </div>
  
          <div className='form-group custom-text-align'>
            <label for='inputPassword'>Password</label>
            <input type='password' className='form-control' id='inputPassword' placeholder='Password' />
          </div>
  
          <div className='form-group custom-text-align'>
            <label for='confirmPassword'>Confirm Password</label>
            <input type='password' className='form-control' id='confirmPassword' placeholder='Confirm Password' />
          </div>
  
          <div className='form-group custom-text-align'>
            <label for='inputEmail'>Email</label>
            <input type='email' className='form-control' id='inputEmail' placeholder='Email Address' />
            <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
          </div>
  
          <div className='form-row'>
            <div className='form-group col-md-6 custom-text-align'>
              <label for='inputAllergies'>Allergies</label>
              <input type='text' className='form-control' id='inputAllergies' placeholder='Allergies' />
            </div>
            <div className='form-group col-md-6 custom-text-align'>
              <label for='inputHobbies'>Hobbies</label>
              <input type='text' className='form-control' id='inputHobbies' placeholder='Hobbies' />
            </div>
          </div>
  
          <div className='form-row'>
            <div className='form-group col-md-6 custom-text-align'>
              <label for='inputFaveFoods'>Favorite Foods</label>
              <input type='text' className='form-control' id='inputFaveFoods' placeholder='Foods I Like' />
            </div>
            <div className='form-group col-md-6 custom-text-align'>
              <label for='inputHateFoods'>Loathed Foods</label>
              <input type='text' className='form-control' id='inputHateFoods' placeholder='Foods I Dislike' />
            </div>
          </div>
  
          <div className='form-row'>
            <div className='form-group col-md-6 custom-text-align'>
              <label for='inputPhobias'>Phobias</label>
              <input type='text' className='form-control' id='inputPhobias' placeholder='Phobias' />
            </div>
            <div className='form-group col-md-6 custom-text-align'>
              <label for='inputBirthday'>Birthday</label>
              <input type='text' className='form-control' id='inputBirthday' placeholder='Birthday' />
            </div>
          </div>
  
          {/* Might need to redesign Add Connection Section */}
          <div className='input-group mb-3'>
            <input type='text' className='form-control' placeholder='Connection ID' aria-label='Enter Connection ID'
              aria-describedby='button-addon2' />
            <div className='input-group-append'>
              <button className='btn btn-outline-secondary' type='button' id='button-addon2'>Add Connection</button>
            </div>
          </div>
          {/* <div className='input-group mb-3'>
            <input type='text' className='form-control' placeholder='Connection ID' aria-label='Enter Connection ID'
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
  )
}

//need to add 'delete connection' option