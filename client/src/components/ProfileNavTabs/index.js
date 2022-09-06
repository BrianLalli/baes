import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth.js';
import './profileNavTabs.css';

export default function ProfileNavTabs(){
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
    return(
        // <div key={user._id} className="card mb-3 row">
           <div className='mt-4 container'>
                <ul className="row nav nav-pills card-header-pills justify-content-md-center custom-nav">
                    <li className="col-12 col-md-4 nav-item text-center">
                        <button className="btn btn-info custom-btn mb-1">
                            <Link className="btn-link navTabs" to='#profile'>Profile</Link>
                        </button>
                    </li>
                    <li className="col-12 col-md-4 nav-item text-center">
                        <button className="btn btn-info custom-btn mb-1">
                            <Link className="btn-link" to='#addNote'>Add Note</Link>
                        </button>
                    </li>
                    <li className="col-12 col-md-4 nav-item text-center">
                        <button className="btn btn-info custom-btn mb-1">
                            <Link className="btn-link" to='#notes'>View Notes</Link>
                        </button>
                    </li>
                </ul>
            </div>
        // </div>
    )
}

