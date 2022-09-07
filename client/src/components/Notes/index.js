import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';

import { QUERY_SINGLE_USER, QUERY_ME } from '../../utils/queries';

export default function  Notes(){

    // if (!notes.length) {
    //     return <h3>No Notes Yet</h3>
    // }
    
    // const [userData, setUserData] = useState({})
    const { userId } = useParams();

    const { loading, data } = useQuery(

        userId ? QUERY_SINGLE_USER : QUERY_ME,
        {
          variables: { userId: userId },
        }
      );
    
      const user = data?.me || data?.user || {}

   
    return (
      <div className="container mt-5" id='notes'>
            {user.notes && user.notes.map((note) => (
                <div key={note._id} className="card mb-3" >
                    <p>{note.content}</p>
                </div>
            ))}
        </div>
    )
}

