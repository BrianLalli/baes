import React from 'react';
import { Link } from 'react-router-dom';

export default function Notes({ notes }){
    // if (!notes.length) {
    //     return <h3>No Notes Yet</h3>
    // }
    
    
    return (
      <div className="container mt-5" id='notes'>
            {notes && notes.map((note) => (
                <div key={note._id} className="card mb-3" >
                    <p>{note.content}</p>
                </div>
            ))}


            {/* <div className='row justify-content-center'>
                <h2 className='col-12 col-lg-9'>Notes</h2>
                <ul className="list-group col-12 col-lg-9">
                    <li className="list-group-item">{note.content}</li>
                    
                </ul>
            </div> */}
        </div>
    )
}

