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
      <div className="container mt-5 card" id='notes'>
        <div className="row justify-content-center">
          <h2 className="col-12 col-lg-9 card-title">Notes:</h2>
            {user.notes && user.notes.map((note) => (
                <ul className="col-12 col-lg-9 list-item-goup" key={note._id}>
                    <li className="col-12 col-lg-9">{note.content}</li>
                </ul>
            ))}
        </div>
      </div>
    )
}

