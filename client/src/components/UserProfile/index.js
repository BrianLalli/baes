import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth.js';
import './userProfile.css'

export default function UserProfile(){
  const { userId } = useParams();
  

  // If there is no `userId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />
  }
  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user?.username) {
    return (
      <h4 className='text-center'>
        This user does not exist.
      </h4>
    );
  }
  return (
  <div className='container mt-5' id="profile">
    
    <div className='row justify-content-md-center '>
      <h4 className="card-header m-0 col-12 col-lg-9 custom-card-header " id="userProfile">
        <strong className='strong-header m-2'>{user.username}'s Profile</strong>
      </h4>
      <ul className="custom-list-group list-group-flush col-12 col-lg-9 custom-ul p-0">
        <li className="custom-list-group-item ">User ID: <span className='cs-list-bg'>{user._id}</span></li>
        <li className="custom-list-group-item">Email:  <span className='cs-list-bg'>{user.email}</span></li>
        <li className="custom-list-group-item">Allergies:  <span className='cs-list-bg'>{user.allergies}</span></li>
        <li className="custom-list-group-item">Favorite Foods:  <span className='cs-list-bg'>{user.faveFoods}</span></li>
        <li className="custom-list-group-item">Disliked Foods:  <span className='cs-list-bg'>{user.hateFoods}</span></li>
        <li className="custom-list-group-item">Birthday:  <span className='cs-list-bg'>{user.birthday}</span></li>
        <li className="custom-list-group-item">Phobias: <span className='cs-list-bg'>{user.phobias}</span></li>
        <li className="custom-list-group-item">Hobbies: <span className='cs-list-bg'>{user.hobbies}</span></li>
      </ul>
    </div>
  </div>
 )
}