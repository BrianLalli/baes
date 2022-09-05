import React from 'react';
import './Profile.css';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth.js';
import UserProfile from '../../components/UserProfile';
import AddNote from '../../components/AddNote'
import Notes from '../../components/Notes'

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
    <div className="container">
      <div key={user._id} className="card mb-3 row">
           
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <button className="btn btn-info">
                <Link className="btn-link" to={UserProfile}>Profile</Link>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-info">
                <Link className="btn-link" to={AddNote}>Add Note</Link>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-info">
                <Link className="btn-link" to={Notes}>View Notes</Link>
              </button>
            </li>
          </ul>
        </div>

        <UserProfile /> 
            
      </div>
    </div>
  );
};

export default Profile;
