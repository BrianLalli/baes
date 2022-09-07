import React from 'react';
import Admin from '../../components/AdminQuestions'

export default function adminPage({adminState, setAdminState}) {
  return (
    
    <div>
      <Admin 
      adminState={ adminState }
      setAdminState={ setAdminState }
      />
    </div>
    
  )
}