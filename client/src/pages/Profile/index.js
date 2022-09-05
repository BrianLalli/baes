import React from 'react';
import './Profile.css';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth.js';

const Profile = () => {
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

  // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
  //   return <Navigate to="/profile/" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(user)
  if (!user?.username) {
    return (
      <h4>
        This user does not exist
      </h4>
    );
  }

  return (
    <div>
      <h3>Profile Page</h3>
          <div key={user._id} className="card mb-3">
            <h4 className="card-header p-2 m-0">
              {user.username}
              <br />
            </h4>
            <div className="card-body bg-light p-2">
              <li>User ID: {user._id}</li>
              <li>Email: {user.email}</li>
              <li>Allergies: {user.allergies}</li>
              <li>Favorite Foods: {user.faveFoods}</li>
              <li>Disliked Foods: {user.hateFoods}</li>
              <li>Birthday: {user.birthday}</li>
              <li>Phobias: {user.phobias}</li>
              <li>Hobbies: {user.hobbies}</li>
            </div>
          </div>
    </div>
  );
};

export default Profile;
