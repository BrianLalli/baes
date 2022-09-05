import React from 'react';
import Admin from '../../components/AdminQuestions'
import Logout from '../../components/Logout';


export default function adminPage({adminState, setAdminState}) {
  return (
    <div>
      <Admin 
      adminState={ adminState }
      setAdminState={ setAdminState }
      />
      <Logout/>
    </div>
    
  )
}