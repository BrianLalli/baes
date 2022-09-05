import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth.js';

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
  console.log(user)
  if (!user?.username) {
    return (
      <h4 className='text-center'>
        This user does not exist.
      </h4>
    );
  }
  return (
  <div>
    <h4 className="card-header p-2 m-0 col-12 col-md-6" id="userProfile">
              {user.username}'s Profile
              <br />
            </h4>
            <div className="card-body bg-light p-2 col-12 col-md-6">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">User ID: {user._id}</li>
              <li className="list-group-item">Email: {user.email}</li>
              <li className="list-group-item">Allergies: {user.allergies}</li>
              <li className="list-group-item">Favorite Foods: {user.faveFoods}</li>
              <li className="list-group-item">Disliked Foods: {user.hateFoods}</li>
              <li className="list-group-item">Birthday: {user.birthday}</li>
              <li className="list-group-item">Phobias: {user.phobias}</li>
              <li className="list-group-item">Hobbies: {user.hobbies}</li>
              <li className="list-group-item">Connections: {user.connections}</li>
              <li className="list-group-item" id="addNotes">Add Note: </li>
              <li className="list-group-item">Notes: {user.notes} </li>
              </ul>

 </div>
 </div>
 )}