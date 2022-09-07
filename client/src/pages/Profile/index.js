import React, {useState} from 'react';
import './Profile.css';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth.js';
import ProfileNavTabs from '../../components/ProfileNavTabs';
import UserProfile from '../../components/UserProfile';
import AddNote from '../../components/AddNote';
import Notes from '../../components/Notes';


export default function Profile({userState}) {
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
    <div >
      <ProfileNavTabs />
      <UserProfile />
      <AddNote />
      <Notes
      notes={userState}/>
    </div>
  );
}
