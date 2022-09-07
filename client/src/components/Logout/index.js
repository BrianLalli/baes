import React from 'react';
import Auth from '../../utils/auth';
import './styles.css';


export default function Logout () {
  
  const handleLogout = () => {
    Auth.logout()
  }


  return (
    <div>
      <button className='custom-save-btn btn-margin' onClick={handleLogout}>Logout</button>
    </div>
  )
}

