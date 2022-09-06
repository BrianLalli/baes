import React from 'react';
import Auth from '../../utils/auth';


export default function Logout () {
  
  const handleLogout = () => {
    Auth.logout()
  }


  return (
    <div>
      <button className='btn btn-warning' onClick={handleLogout}>Logout</button>
    </div>
  )
}