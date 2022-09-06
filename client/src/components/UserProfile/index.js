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
    
      <div className="card-body row justify-content-md-center custom-card-body">
        <ul className="list-group list-group-flush col-12 col-lg-9 custom-ul">
          <li className="list-group-item">User ID: {user._id}</li>
          <li className="list-group-item"><strong className='strong-list-item'>Email: </strong>{user.email}</li>
          <li className="list-group-item"><strong className='strong-list-item'>Allergies: </strong>{user.allergies}</li>
          <li className="list-group-item"><strong className='strong-list-item'>Favorite Foods: </strong>{user.faveFoods}</li>
          <li className="list-group-item"><strong className='strong-list-item'>Disliked Foods: </strong>{user.hateFoods}</li>
          <li className="list-group-item"><strong className='strong-list-item'>Birthday: </strong>{user.birthday}</li>
          <li className="list-group-item"><strong className='strong-list-item'>Phobias: </strong>{user.phobias}</li>
          <li className="list-group-item"><strong className='strong-list-item'>Hobbies: </strong>{user.hobbies}</li>
          <li className="list-group-item"><strong className='strong-list-item'>Connections: </strong>{user.connections}</li>
        </ul>
      </div>

  </div>
  </div>
 )
}