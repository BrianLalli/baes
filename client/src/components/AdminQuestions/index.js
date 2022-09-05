import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import './admin.css';

//missing functionality to text boxes

export default function Admin() {
  //mutation to fetch data
  //add logic to populate form fields
  //logic to save state of each input that user submits
  //click save changes -> mutuation to update user 
  return (
    <div className='container'>
      <div className='edit-profile-container row'>
        <div className='col-12 col-md-7 text-center'>
          <img src='https://avatars.githubusercontent.com/u/74509058?v=4' alt='user avatar'
            className='rounded img-thumbnail' />
          {/* possible modal with option to upload photo goes here */}
          {/* <br />
          <br />
          <form>
            <div className='form-group'>
              <label for='uploadPhoto'>Upload Photo</label> 
              <br/>
              <input type='file' className='form-control-file' id='uploadPhoto' />
            </div>
          </form> */}


          <h2 id='username'>murderclaws56</h2>
          <h3>Connection ID: <span id='user-id'>763djnf973</span></h3>
          <h4>Edit your profile.</h4>
          <form className='custom-text-align'>
            <div className='form-group'>
              <label for='inputUsername'>Username</label>
              <input type='text' className='form-control' id='inputUsername' placeholder='Username' />
            </div>

            <div className='form-group'>
              <label for='inputPassword'>Password</label>
              <input type='password' className='form-control' id='inputPassword' placeholder='Password' />
            </div>

            <div className='form-group'>
              <label for='confirmPassword'>Confirm Password</label>
              <input type='password' className='form-control' id='confirmPassword' placeholder='Confirm Password' />
            </div>

            <div className='form-group'>
              <label for='inputEmail'>Email</label>
              <input type='email' className='form-control' id='inputEmail' placeholder='Email Address' />
              <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
            </div>

            <div className='row'>
              <div className='col'>
                <label for='allergies'>Allergies</label>
                <input type='text' className='form-control' id='allergies' placeholder='Allergies' />
              </div>
              <div className='col'>
                <label for='hobbies'>Hobbies</label>
                <input type='text' className='form-control' id='hobbies' placeholder='Hobbies' />
              </div>
            </div>

            <div className='row'>
              <div className='col'>
                <label for='faveFoods'>Favorite Foods</label>
                <input type='text' className='form-control' id='faveFoods' placeholder='Foods I Like' />
              </div>
              <div className='col'>
                <label for='hateFoods'>Loathed Foods</label>
                <input type='text' className='form-control' id='hateFoods' placeholder='Foods I Dislike' />
              </div>
            </div>

            <div className='row'>
              <div className='col'>
                <label for='phobias'>Phobias</label>
                <input type='text' className='form-control' id='phobias' placeholder='Phobias' />
              </div>
              <div className='col'>
                <label for='birthday'>Birthday</label>
                <input type='text' className='form-control'
                  id='birthday' placeholder='Birthday' />
              </div>
            </div>
          </form>
          <br />
          <br />

          <h3 className='text-center'>Edit Connections</h3>

          <div className='input-group mb-3'>
            <input type='text' className='form-control' placeholder='Enter Connection ID' />
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
  )
}
